var fs = require('fs');
var _ = require('lodash');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var callback = this.async();
  var loaderContext = this;
  var query = loaderUtils.parseQuery(this.query);
  var re = new RegExp(/^@import \"((.?||.+)scss_config)\";/);

  // Do nothing if there is no scss_config in imports.
  if(!content.match(re)) {
    callback(null, content);
    return;
  }

  // Find a path to scss_config from the @import
  // Add an extension to resolve the path
  var scssConfigPath = content.match(re)[1] + ".scss.tpl";

  resolveImport = function(url) {
    var context = loaderContext.context;
    var importRequest = loaderUtils.urlToRequest(url, query.root);

    loaderContext.resolve(context, importRequest, function(err, filepath) {
      if(err) {
        callback(err);
        return;
      }

      loaderContext.addDependency(filepath); // Add a dependency

      fs.readFile(filepath, "utf-8", function(err, data) {
        if(err) return callback(err);
        var config = _.template(data)({ "config": query });
        new_content = content.replace(re, config); // Inline scss_config into SCSS file
        callback(null, new_content);
      });
    });
  };

  resolveImport(scssConfigPath);
};
