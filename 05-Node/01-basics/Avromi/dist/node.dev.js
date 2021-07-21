"use strict";

console.log("hi you foo");

var http = require('http');

var html = "<body>\n<h1>Welcome</h1>\n\n<p>here I can write some more HTML looking code and use it as a variable!!! YAY</p>\n\n</body>";

var requestListener = function requestListener(req, res) {
  res.writeHead(200);

  var fs = require('fs');

  var file = fs.res.end(html);
};

var server = http.createServer(requestListener);
server.listen(3000, function () {
  console.log('Listen on port 3000');
});