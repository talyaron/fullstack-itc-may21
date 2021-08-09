"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      var user = _objectSpread({}, req.body, {
        balance: parseFloat((Math.random() < 0.5 ? -1 * Math.random() : 1 * Math.random()) * 1000 + 200).toFixed(2)
      });

      allLogin.push(user);
      fs.writeFileSync("./login.json", JSON.stringify(allLogin));
      res.send({
        ok: "User Created",
        user: allLogin
      });
    } else {
      throw new Error("this is user alredady exist");
    }
  } catch (e) {
    res.status(500).send({
      error: "".concat(e.message)
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
        maxAge: 3000,
        httpOnly: true
      });
      res.send({
        ok: 'Welcome to Bank Jonathan'
      });
    } else {
      throw new Error("Is incorrect your email or password. Try Again");
    }
  } catch (e) {
    res.status(500).send({
      error: "".concat(e.message)
    });
  }
});
app.get('/getCookie', function (req, res) {
  try {
    var cookieName = req.cookies.cookieName;
    if (!cookieName) throw new Error("Nothing is on the cookie");
    var cookie = JSON.parse(cookieName);
    console.log(cookie);
    res.send(cookie);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e.message)
    });
  }
});
app.use(express["static"]('public'));
app.listen(3000, function () {
  console.log('Listen on 3000');
});