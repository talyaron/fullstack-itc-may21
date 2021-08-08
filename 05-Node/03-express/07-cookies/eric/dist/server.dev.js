"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.post('/getData', function (req, res) {
  var _req$body = req.body,
      userName = _req$body.userName,
      password = _req$body.password;
  var loginData = JSON.stringify({
    name: userName,
    password: password
  });
  res.cookie('cookieName', loginData, {
    maxAge: 3000,
    httpOnly: true
  });
  res.send({
    ok: 'Press accept to see your login data'
  });
});
app.get('/user', function (req, res) {
  //get name from the cookie
  //read cookies
  console.log(req.cookies);
  var cookieName = req.cookies.cookieName;
  var cookie = JSON.parse(cookieName);
  console.log(cookie);
  var name = cookie.name,
      password = cookie.password;
  console.log(name);
  res.send({
    name: name,
    password: password
  });
});
app.use(express["static"]('public'));
app.listen(3000, function () {
  console.log('listen on 3000');
});