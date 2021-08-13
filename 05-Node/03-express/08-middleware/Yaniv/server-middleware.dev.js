"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.get('/getData', function (req, res) {
  //read cookies
  console.log(req.cookies);
  var cookieName = req.cookies.cookieName;
  if (cookieName) var cookie = JSON.parse(cookieName);
  console.log(cookie);
  var name = cookie.name;
  console.log(name); //write a cookie

  var name1 = JSON.stringify({
    name: 'Raziel'
  });
  res.cookie('cookieName', name1, {
    maxAge: 300000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.get('/user', function (req, res) {
  //get name from the cookie
  //read cookies
  console.log(req.cookies);
  var cookieName = req.cookies.cookieName;
  var cookie = JSON.parse(cookieName);
  console.log(cookie);
  var name = cookie.name;
  console.log(name);
  res.send({
    name: name
  });
});
app.use(express["static"]('public'));
app.listen(3000, function () {
  console.log('listen on 3000');
});