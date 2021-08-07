"use strict";

var express = require('express');

var app = require('express')();

var cookieParser = require('cookie-parser');

app.use(express["static"]('public')); //I use this to read the cookie (I can create it with out this)

app.use(cookieParser());
app.get('/getData', function (req, res) {
  //Set the cookie
  var cookieNombre = {
    content: "Dale a tu cuerpo alegria macarena"
  };
  res.cookie('cookieName', cookieNombre, {
    maxAge: 10000,
    httpOnly: true
  }).send('Cookie is set'); //Read the cookie

  var cookieName = req.cookies.cookieName;
  var content = cookieName.content;
  console.log(content);
});
app.listen(3000, function () {
  console.log('listen on 3000');
});