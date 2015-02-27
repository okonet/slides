<% var pairs = _.pairs(config);
    _.each(pairs, function(pair){ %>
<% if (_.isArray(pair[1])) { %>
$<%= pair[0] %>: <%= pair[1].join(',') %>;
<% } else if (!_.isObject(pair[1])) { %>
$<%= pair[0] %>: <% _.isString(pair[1]) ? print('"' + pair[1] + '"') : print(pair[1] + "px") %>;
<% } %>
<% }) %>
