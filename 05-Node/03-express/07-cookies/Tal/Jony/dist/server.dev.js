"use strict";

var express = require('express');

var app = require('express')();

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/getData', function (req, res) {
  console.log(req.cookies);
  var cookieName = req.cookies.cookieName;
  var cookie = JSON.parse(cookieName);
  var name = cookie.name;
  console.log(name);
  var newName = {
    'name': 'Jonathan',
    'edad': 23
  };
  res.cookie('cookieName', JSON.stringify(newName), {
    maxAge: 30000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.use(express["static"]('public'));
app.listen(3000, function () {
  console.log('listen on 3000');
});