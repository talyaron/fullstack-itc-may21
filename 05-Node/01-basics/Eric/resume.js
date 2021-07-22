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


const express = require('express')

// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('resume.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/resume.html")
})
app.listen(8080)