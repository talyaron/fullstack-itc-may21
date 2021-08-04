"use strict";

var express = require('express');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var Joi = require('joi');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public')); //Listen on port:

app.listen(port, function () {
  console.log("Server listening on port ".concat(port, "..."));
});