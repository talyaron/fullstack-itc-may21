"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser()); // READ PUBLIC 

app.use(express["static"]('public'));
app.get('/setCookie/:user', function (req, res) {
  //set cookies
  var formData = req.params;
  var user = formData;
  res.cookie('name', Object.values(user), {
    maxAge: 300000,
    httpOnly: true
  });
  res.send({
    success: true
  });
});
app.get('/readCookies', function (req, res) {
  //read cookies
  console.log(req.cookies);
  var cookieName = req.cookies;
  console.log(cookieName);
  res.send(cookieName);
});
app.get('/removeCookie', function (req, res) {
  res.clearCookie('name');
  res.send({
    clear: true
  });
});
app.listen(1200, function () {
  console.log('listen on 1200');
}); // create login page
// show the name I all other pages (create the 2-page site)