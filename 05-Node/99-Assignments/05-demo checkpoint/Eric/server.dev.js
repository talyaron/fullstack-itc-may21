"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require("fs");

var cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express["static"]('public')); // const studentRoutes = require('./routes/studentRoute');
// app.use('/student', studentRoutes);

app.listen(port, function () {
  return console.log('Server listen on port', port);
});