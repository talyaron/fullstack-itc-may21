"use strict";

var http = require('http');

var fs = require('fs');

var port = process.env.PORT || 4000;
var server = http.createServer();
server.on('request', function (req, res) {
  try {
    var method = req.method,
        url = req.url,
        headers = req.headers,
        body = req.body;
    console.log('url:', url);
    console.log(method);

    switch (url) {
      case '/':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var main = fs.readFileSync('./index.html');
        res.end(main);
        break;

      case '/perfil.jpg':
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        });
        var img = fs.readFileSync('./perfil.jpg');
        res.end(img);
        break;

      case '/style.css':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var style = fs.readFileSync('./style.css');
        res.end(style);
        break;

      default:
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        });
        res.end('The requested resource was not found');
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