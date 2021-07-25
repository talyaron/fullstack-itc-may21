"use strict";

var http = require('http');

var port = process.env.PORT || 3001;

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
        var homeFile = fs.readFileSync('./home.html');
        res.end(homeFile);
        break;

      case '/about':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var aboutFile = fs.readFileSync('./about.html');
        res.end(aboutFile);
        break;

      case '/contact':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var contactFile = fs.readFileSync("./contact.html");
        res.end(contactFile);
        break;

      case '/profile.img':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var imageFile = fs.readFileSync("./profile.png");
        res.end(imageFile);
        break;

      default:
        throw new Error("boooooooooooom");
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