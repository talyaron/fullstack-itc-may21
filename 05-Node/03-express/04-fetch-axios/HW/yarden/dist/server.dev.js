"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var _require = require('uuid'),
    uuidv4 = _require.v4;

app.use(express.json());
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("The server is running at port:".concat(port));
});