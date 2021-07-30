"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require('fs');

app.use(express["static"]('public')); //read filefunction? // on load 

app.get('/', function (req, res) {
  var cocktails = fs.readFileSync('cocktails.json');
  console.log(cocktails);
  res.send('something' + cocktails);
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});