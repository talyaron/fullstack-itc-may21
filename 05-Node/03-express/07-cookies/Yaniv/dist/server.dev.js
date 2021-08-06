"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 5555;
app.get('/getData', function (req, res) {
  res.cookie('myFirstCookie', "Eat me!", {
    maxAge: 3000,
    httpOnly: true
  });
  res.send({
    success: true
  });
});
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});