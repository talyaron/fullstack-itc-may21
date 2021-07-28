"use strict";

/* create a server and a client
in the client: 
 - create an input of colors, and "on change" change the color of the background of the document
 - send to the server the color
the server will store the color in global (better on closure) "color" variable

when the client loads, it will fetch the color from the server and  paint the background in that color */
var express = require('express');

app = express();
var port = process.env.PORT || 3000;

var fs = require('fs');

app.use(express["static"]('public'));
app.get('/', function (req, res) {
  var html = fs.readFileSync('index.html');
  console.log(pepe);
  res.send(html);
});
app.post('/seeColor', function (req, res) {
  var body = req.body;
  console.log(body);
  res.send(body);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});