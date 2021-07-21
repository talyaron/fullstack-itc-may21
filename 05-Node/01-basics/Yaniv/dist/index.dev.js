"use strict";

var http = require('http');

var requestListener = function requestListener(req, res) {
  res.writeHead(200);
  res.end('<h1>Hello, World!</h1>');
};

var server = http.createServer(requestListener);
server.listen(3000, function () {
  console.log('Listen on port 3000');
});