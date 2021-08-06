"use strict";

var express = require('express');

var app = require('express')();

var cookieParser = require('cookie-parser');

app.get('/getData', function (req, res) {
  res.cookie('cookieName', "Yarden", {
    maxAge: 3000,
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