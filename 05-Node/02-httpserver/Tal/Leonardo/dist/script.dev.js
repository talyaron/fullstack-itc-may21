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
        var file1 = fs.readFileSync('./index.html');
        res.end(file1);
        break;

      case '/about':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var file2 = fs.readFileSync('./about.html');
        res.end(file2);
        break;

      case '/hobbies':
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        var file3 = fs.readFileSync('./hobbies.html');
        res.end(file3);
        break;

      case '/styles':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var file4 = fs.readFileSync('./styles.css');
        res.end(file4);
        break;

      case '/dog':
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        });
        var file5 = fs.readFileSync('./img/dogSiberiano.jpg');
        res.end(file5);
        break;

      default:
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        });
        res.end('The request resource was not found');
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
  console.log("The port is serving in port ".concat(port));
});