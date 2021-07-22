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
var http = require('http');

var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('resume.html', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    return res.end();
  });
}).listen(8080);