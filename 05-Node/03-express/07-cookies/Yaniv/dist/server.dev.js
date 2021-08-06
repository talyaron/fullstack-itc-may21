"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 5555;
app.get('/getData', function (req, res) {
  var cookieObject = {
    content: "Eat me!"
  };
  var cookieName = 'myFirstCookie';
  res.cookie(cookieName, JSON.stringify(cookieObject), {
    maxAge: 300000,
    httpOnly: true
  });
  res.send({
    success: true
  });
  var myFirstCookie = req.cookies.myFirstCookie;
  var FetchedCookieObject = JSON.parse(myFirstCookie);
  console.log(FetchedCookieObject);
});
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});