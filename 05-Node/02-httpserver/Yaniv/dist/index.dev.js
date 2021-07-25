"use strict";

var http = require('http');

var fs = require('fs');

var port = process.env.PORT || 3002;
var server = http.createServer();
server.on('request', function (req, res) {
  try {
    var method = req.method,
        url = req.url,
        headers = req.headers;

    switch (url) {
      case '/home':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var homeHtml = fs.readFileSync('./home.html');
        res.end(homeHtml);
        break;

      case '/about':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var aboutHtml = fs.readFileSync('./about.html');
        res.end(aboutHtml);
        break;

      case '/gallery':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var galleryHtml = fs.readFileSync('./gallery.html');
        res.end(galleryHtml);
        break;

      case '/style.css':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var styleCss = fs.readFileSync('./dist/style.css');
        res.end(styleCss);
        break;

      case '/dog.jpg':
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        });
        var dogImg = fs.readFileSync('./dog.jpg');
        res.end(dogImg);
        break;

      default:
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.end('<h1>404 error - page not found :-[ </h1>');
        break;
    }
  } catch (er) {
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