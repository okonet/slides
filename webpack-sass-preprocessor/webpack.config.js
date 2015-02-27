var _ = require("lodash");
var path = require("path");
var grunt = require("grunt");
var webpack = require("webpack");
var configs = [];

["desktop", "touch"].forEach(function(view){

    var buildName = view;
    var SCSSVariables = {};
    var config = grunt.file.readYAML(__dirname + "/config/" + view + ".yml");
    _.extend(SCSSVariables, config || {});

  configs.push(
    {
      name: buildName,
      entry: "./main.coffee",
      output: {
        // path: path.join(__dirname, view),
        filename: buildName + ".js",
        chunkFilename: buildName + ".[id].js"
      },
      plugins: [
        new webpack.DefinePlugin(getDefineObject(view))
      ],
      module: {
        loaders: [
          { test: /\.coffee$/, loader: "coffee" },
          { test: /\.css$/, loader: "style!css" },
          { test: /\.scss$/, loaders: [
              "style-loader",
              "css-loader",
              "sass-loader",
              __dirname + "/loaders/preprocess-sass-loader.js?" + JSON.stringify(SCSSVariables)
            ]
          }
        ]
      }
    }
  );
});

function getDefineObject(view) {
  var config = grunt.file.readYAML(__dirname + "/config/" + view + ".yml");
  var defineObject = {
    VIEW: JSON.stringify(view),
    containerWidth: JSON.stringify(config.containerWidth),
    color: JSON.stringify(config.color)
  }
  return defineObject;
}

module.exports = configs;
