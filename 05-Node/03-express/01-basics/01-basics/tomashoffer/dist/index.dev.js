"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 4001;

var bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});