"use strict";

var express = require("express");

var app = express();

var fs = require("fs");

var port = process.env["const"] || 3000;

var cookieParser = require("cookie-parser");

var _require = require('uuid'),
    uuidv4 = _require.v4;

app.use(cookieParser());
app.use(express.json());
app.use(express["static"]("public"));

function readUserData() {
  var userData = fs.readFileSync("./userData.json");
  return JSON.parse(userData);
}

app.post("/signUp", function (req, res) {
  try {
    var _req$body = req.body,
        name = _req$body.name,
        password = _req$body.password;
    var userData = readUserData();
    var addUser = {
      id: uuidv4(),
      name: name,
      password: password
    };
    userData.push(addUser);
    fs.writeFileSync("./userData.json", JSON.stringify(userData));
    res.send(userData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.post('/loginUser', function (req, res) {
  try {
    var _req$body2 = req.body,
        name = _req$body2.name,
        password = _req$body2.password;
    var userData = readUserData();
    var userExist = userData.find(function (user) {
      return user.name === name && user.password === password;
    });

    if (userExist) {
      var nameUser = userExist.nameUser;
      var userCookie = JSON.stringify({
        nameUser: name
      });
      res.cookie('cookieName', userCookie, {
        maxAge: 300000001,
        httpOnly: true
      });
      res.send({
        userInfo: userExist
      });
    } else {
      res.send({
        message: 'Username or password are wrong, try again!'
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get('/userInfo', function (req, res) {
  try {
    //Read cookies
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    res.send({
      cookie: cookie
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.listen(port, function () {
  console.log("Server listen on port", port);
});