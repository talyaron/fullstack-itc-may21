"use strict";

var http = require('http');

var port = process.env.PORT || 3001;
var server = http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
      //add read file
      res.end("\n        <html>\n            <head>\n                <title>first node app</title>\n            </head>\n                <body>\n                <h1>Welcometo my node app</h1>\n                <a href=\"/admin\">Admin</a>\n                <a href=\"\">Contact</a>\n                <a href=\"\">About</a>\n                </body>\n        </html>\n        ");
      break;

    case '/admin':
      res.end('welcome to the admin page');
      break;

    case '/contact':
      res.end('welcome to contact page');
      break;

    default:
      res.end("\n        <html>\n            <head>\n                <title>first node app</title>\n            </head>\n                <body>\n                <h1>Welcometo my node app</h1>\n                </body>\n        </html>\n        ");
  }
});
server.listen(port, function () {
  console.log("server now is on port ".concat(port));
});