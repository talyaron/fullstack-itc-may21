"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.send('Esta es la banda loca del fortin!');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});