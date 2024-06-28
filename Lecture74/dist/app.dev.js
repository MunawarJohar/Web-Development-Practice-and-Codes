"use strict";

var express = require("express");

var path = require("path");

var fs = require("fs");

var app = express();
var port = 400; // EXPRESS SPECIFIC STUFF

app.use('/static', express["static"]('static')); // For serving static files
// PUG SPECIFIC STUFF

app.set('view engine', 'pug'); // Set the template engine as pug

app.set('views', path.join(__dirname, 'views')); // Set the views directory
// ENDPOINTS

app.get('/', function (req, res) {
  var con = "This is the best content on the internet so far so use it wisely";
  var params = {
    'title': 'PubG is the best game',
    "content": con
  };
  res.status(200).render('index.html', params);
}); // START THE SERVER

app.listen(port, function () {
  console.log("The application started successfully on port ".concat(port));
});
//# sourceMappingURL=app.dev.js.map
