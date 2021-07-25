"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.use('/public', express["static"]('public'));
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});