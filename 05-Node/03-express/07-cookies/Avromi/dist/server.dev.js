"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/cookie', function (req, res) {
  //read cookies 
  var cookie = req.cookies['cookie'];
  console.log(cookie);
  res.cookie('cookie', "Avromi Is...", {
    maxAge: 30000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.get('/user', function (req, res) {
  var cookie = req.cookies['cookie'];
  res.send(cookie);
  console.log(cookie);
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});