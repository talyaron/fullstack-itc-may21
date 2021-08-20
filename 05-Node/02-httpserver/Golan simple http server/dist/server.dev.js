"use strict";

//Hey Yonatan! I also did it in HTTP :)
//Everything worked on my end, except the link to the about page for some reason
var http = require("http");

var port = process.env.PORT || 3000;
var server = http.createServer();

var fs = require("fs");

server.on("request", function (req, res) {
  try {
    var method = req.method,
        url = req.url,
        headers = req.headers;

    switch (url) {
      case "/":
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        var homePg = fs.readFileSync('./index.html');
        res.end(homePg);
        break;

      case "/about":
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        var aboutPg = fs.readFileSync('./about.html');
        res.end(aboutPg);
        break;

      case '/style.css':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var styleSheet = fs.readFileSync('./style.css');
        res.end(styleSheet);
        break;

      case '/profile.jfif':
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        });
        var img = fs.readFileSync('./profile.jfif');
        res.end(img);
        break;

      default:
        res.writeHead(404, {
          "Content-Type": "text/plain"
        });
        res.end("Oops! 404: Page not Found");
    }
  } catch (er) {
    console.log(er);
    res.writeHead(500, {
      "Content-Type": "text/plain"
    });
    res.end("Oops - server error: ".concat(e.message));
  }
});
server.listen(port, function () {
  console.log('Server listening on port', port, ':-)');
});