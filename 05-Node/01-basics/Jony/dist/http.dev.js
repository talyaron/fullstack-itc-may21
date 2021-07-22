"use strict";

var http = require('http');

var requestListener = function requestListener(req, res) {
  res.writeHead(200);
  res.end("<header style=\"background-color:red\"><h1>Hello \n            <strong style=\"color:blue\">World!</strong>\n            </h1></header>");
};

var server = http.createServer(requestListener);
server.listen(3000, function () {
  console.log('Listen on port 3000');
});