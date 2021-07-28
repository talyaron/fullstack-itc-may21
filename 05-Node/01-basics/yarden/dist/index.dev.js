"use strict";

/*create a server
create an HTML file with your CV (resume).
Make it stylish and beautiful, as you deserve! 
serve the file using the server.
top-notch: add your image to the index.html
*/
//Setting up a public directory and serving it to the user on designated port using Express
var express = require('express');

var app = express();
var port = 3000;
app.use(express["static"]('./'));
var server = app.listen(port, function () {
  return console.log("listening on port ".concat(port, "!"));
});
server.on('connection', function () {
  console.log('New connection...'); //Just not sure why log is occuring twice
});