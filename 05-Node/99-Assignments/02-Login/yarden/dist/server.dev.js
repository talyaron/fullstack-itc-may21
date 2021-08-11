"use strict";

/* 
    This is a simple login 2 + page site exercise
            This is the back-end file.
*/
// Require expressions and constants for this project:
var express = require('express');

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;
var app = express();
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());
var users = []; // POST to create user on server:

app.post('/addUser', function (req, res) {
  var user = {
    name: req.body.name,
    email: req.body.email
  };
  users.push(user);
  var user1 = JSON.stringify({
    user: user
  });
  res.cookie('userDetails', {
    user1: user1
  }, {
    maxAge: 3000000,
    httpOnly: true
  });
  res.status(201).send({
    ok: true
  });
});
app.get('/user', function (req, res) {
  var user1 = req.cookies.userDetails.user1;
  var cookie = JSON.parse(user1);
  var _cookie$user = cookie.user,
      name = _cookie$user.name,
      email = _cookie$user.email;
  res.send({
    name: name,
    email: email
  });
}); // Listen on port:

app.listen(port, function () {
  console.log("Server listening on port ".concat(port, "..."));
});