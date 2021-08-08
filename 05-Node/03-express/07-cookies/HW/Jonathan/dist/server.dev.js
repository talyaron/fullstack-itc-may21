"use strict";

var express = require("express");

var app = express();

var fs = require("fs");

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

var readAllLogin = function readAllLogin() {
  var allLogin = fs.readFileSync("./login.json");
  return JSON.parse(allLogin);
};

app.post('/signUpUser', function (req, res) {
  try {
    var allLogin = readAllLogin();
    var isFound = allLogin.some(function (elem) {
      return elem.email === req.body.email || elem.username === req.body.username;
    });

    if (!isFound) {
      allLogin.push(req.body);
      fs.writeFileSync("./login.json", JSON.stringify(allLogin));
      res.send({
        ok: "Has creado una cuenta",
        user: allLogin
      });
    } else {
      throw new Error("this is user is foundes");
    }
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.post('/loginUser', function (req, res) {
  try {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;
    var allLogin = readAllLogin();
    var isUserPassOK = allLogin.some(function (elem) {
      return elem.email === email && elem.password === password;
    });

    if (isUserPassOK) {
      var userLogin = allLogin.find(function (elem) {
        return elem.email === email && elem.password === password;
      });
      res.cookie('cookieName', JSON.stringify(userLogin), {
        maxAge: 30000000,
        httpOnly: true
      });
      res.send({
        ok: 'Bienvendio a Bank Jonathan'
      });
    } else {
      throw new Error("Is incorrect your email or password. Try Again");
    }
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get('/getCookie', function (req, res) {
  var cookieName = req.cookies.cookieName;
  var cookie = JSON.parse(cookieName);
  var username = cookie.username;
  res.send(username);
});
app.use(express["static"]('public'));
app.listen(3000, function () {
  console.log('Listen on 3000');
});