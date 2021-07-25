"use strict";

/*
create a server
create an HTML file with your CV (resume).
Make it stylish and beautiful, as you deserve!
serve the file using the server.

80 points

//top-notch:
add your image to the index.html

+20 points
*/
// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('resume.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
// const express = require('express')
//  const app = express()
//  const path = require('path')
//  app.use(express.static(path.join(__dirname, 'public')))
//  app.get('/', function (req, res) {
//    res.sendFile(__dirname + "/resume.html")
//  })
//  app.listen(8080);
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
        var file = fs.readFileSync('resume.html');
        res.end(file);
        break;

      case '/style':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var fileCss = fs.readFileSync('/dist/style.css');
        res.end(fileCss);

      default:
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end('no se encuentra la pag');
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