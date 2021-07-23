"use strict";

var http = require('http');

var fs = require('fs');

var requestListener = function requestListener(req, res) {
  res.writeHead(200);
  var file = fs.readFileSync('index.html');
  res.end(file);
};

var server = http.createServer(requestListener);
server.listen(3000, function () {
  console.log('Listen on port 3000');
});