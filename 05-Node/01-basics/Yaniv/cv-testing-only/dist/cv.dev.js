"use strict";

var express = require('express');

var app = express();

var path = require('path');

var port = 3010; // app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile('./cv.html', {
    root: __dirname
  });
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});