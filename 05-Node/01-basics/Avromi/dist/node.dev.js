"use strict";

console.log("hi you foo");

var http = require('http');

var requestListener = function requestListener(req, res) {
  res.writeHead(200);

  var fs = require('fs');

  var file = fs.readFileSync('./index.html');
  console.log(file);
  res.end(file);
};

var server = http.createServer(requestListener);
server.listen(3000, function () {
  console.log('Listen on port 3000');
});