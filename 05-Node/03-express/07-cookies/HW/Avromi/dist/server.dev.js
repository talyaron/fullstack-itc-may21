"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express["static"]('public'));
app.get('/cookie', function (req, res) {
  //read cookies 
  var name = req.query.name;
  res.cookie('cookie', name, {
    maxAge: 30000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.get('/user', function (req, res) {
  var cookie = req.cookies['cookie'];
  res.send({
    cookie: cookie
  });
});
app.listen(port, function () {
  console.log("App listening on port: ".concat(port));
});