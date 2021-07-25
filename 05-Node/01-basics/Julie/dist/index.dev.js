"use strict";

var http = require("http");

var fs = require("fs");

var PORT = process.env.PORT || 3000;
var server = http.createServer();
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
        var homeFile = fs.readFileSync("./index.html");
        res.end(homeFile);
        break;

      case "/profile.img":
        res.writeHead(200, {
          "Content-Type": "image/jpg"
        });
        var imageFile = fs.readFileSync("./Headshot.jpg");
        res.end(imageFile);
        break;

      case "/css":
        res.writeHead(200, {
          "Content-Type": "text/css"
        });
        var cssFile = fs.readFileSync("./index.css");
        res.end(cssFile);
        break;

      default:
        throw new Error("boooooooooooom");
    }
  } catch (e) {
    console.log(e);
    res.writeHead(500, {
      "Content-Type": "text/plain"
    });
    res.end("There is a sever error: ".concat(e.message));
  }
});
server.listen(PORT, function (error) {
  console.log("Server listening on port ".concat(PORT));
});