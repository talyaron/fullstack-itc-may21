"use strict";

/* create a server
create an HTML file with your CV (resume).
Make it stylish and beautiful, as you deserve!
serve the file using the server.

80 points

//top-notch:
add your image to the index.html

+20 points */
/////////////////////// THIS IS TO SET UP THE SERVER WITH NODE: /////////////////////////
//(Im pretty sure that it should be a better way to show all the images without doing that many cases)
var http = require('http');

var port = process.env.PORT || 3000;

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
        var home = fs.readFileSync('./public/index.html');
        res.end(home);
        break;

      case '/styles':
        res.writeHead(200, {
          'Content-Type': 'text/css'
        });
        var style = fs.readFileSync('./public/dist/styles.min.css');
        res.end(style);
        break;

      case '/argentina':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picArg = fs.readFileSync('./public/img/argentina.png');
        res.end(picArg);
        break;

      case '/budget':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picBudget = fs.readFileSync('./public/img/budget.png');
        res.end(picBudget);
        break;

      case '/coding':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picCoding = fs.readFileSync('./public/img/coding.png');
        res.end(picCoding);
        break;

      case '/css-3':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picCss = fs.readFileSync('./public/img/css-3.png');
        res.end(picCss);
        break;

      case '/cv':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picCv = fs.readFileSync('./public/img/cv.png');
        res.end(picCv);
        break;

      case '/github':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picGit = fs.readFileSync('./public/img/github.png');
        res.end(picGit);
        break;

      case '/html':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picHtml = fs.readFileSync('./public/img/html.png');
        res.end(picHtml);
        break;

      case '/javascript':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picJs = fs.readFileSync('./public/img/javascript.png');
        res.end(picJs);
        break;

      case '/manager':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picManager = fs.readFileSync('./public/img/manager.png');
        res.end(picManager);
        break;

      case '/nodejs':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picNode = fs.readFileSync('./public/img/nodejs.png');
        res.end(picNode);
        break;

      case '/profile':
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        });
        var picProfile = fs.readFileSync('./public/img/profile.jpg');
        res.end(picProfile);
        break;

      case '/spanish':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picSpanish = fs.readFileSync('./public/img/spanish-flag.png');
        res.end(picSpanish);
        break;

      case '/united-kingdom':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picUk = fs.readFileSync('./public/img/united-kingdom (1).png');
        res.end(picUk);
        break;

      case '/united-kingdom1':
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        var picUk1 = fs.readFileSync('./public/img/united-kingdom.png');
        res.end(picUk1);
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
}); /////////////////////// THIS IS TO SET UP THE SERVER WITH EXPRESS: /////////////////////////

/* const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(3000, () => {
  console.log('Servidor web iniciado en puerto 3000');
});
 */