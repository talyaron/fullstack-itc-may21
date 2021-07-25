"use strict";

var http = require('http');

var fs = require('fs');

var port = process.env.PORT || 3005;
var server = http.createServer();
server.on('request', function (req, res) {
  try {
    var method = req.method,
        url = req.url,
        headers = req.headers;

    switch (url) {
      case '/cv':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var cvHtml = fs.readFileSync('./public/cv.html');
        res.end(cvHtml);
        break;

      case '/style.css':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var styleCss = fs.readFileSync('./public/dist/cv.css');
        res.end(styleCss);
        break;

      case '/yaniv.jpg':
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        });
        var profImg = fs.readFileSync('./public/images/yaniv.jpeg');
        res.end(profImg);
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