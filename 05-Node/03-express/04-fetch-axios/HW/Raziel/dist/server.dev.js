"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("The server is running at port:".concat(port));
});