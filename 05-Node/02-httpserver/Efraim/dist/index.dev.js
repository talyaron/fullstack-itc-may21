"use strict";

var http = require('http');

var port = process.env.PORT || 3005;

var fs = require('fs');

var server = http.createServer();
server.on('request', function (req, res) {
  try {
    var method = req.method,
        url = req.url,
        headers = req.headers;

    switch (url) {
      case '/':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var file = fs.readFileSync('index.html');
        res.end(file);
        break;

      case '/about':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var aboutfile = fs.readFileSync('about.html');
        res.end(aboutfile);
        break;

      case '/contact':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var contactfile = fs.readFileSync('contact.html');
        res.end(contactfile);
        break;

      default:
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end('OK 3');
    }
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end("There is a sever error: ".concat(e.message));
  }
});
server.listen(port, function () {
  console.log('Server listen on port', port);
});