"use strict";

var http = require('http');

var requestListener = function requestListener(req, res) {
  res.writeHead(200);
  res.end("\n  <h1>Hello, I'm an h1!</h1>\n  <h2>Hello, I'm an h2!</h2>\n  <h3>Hello, I'm an h3!</h3>\n  <p>Hello, I'm a p!</p>\n  <p style=\"color:pink\">Hello, I'm a pink p!</p>\n  ");
};

var server = http.createServer(requestListener);
var port = 3001;
server.listen(port, function () {
  console.log("Listen on port ".concat(port));
});