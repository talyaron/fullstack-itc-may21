"use strict";

var express = require("express");

var app = express();

var fs = require("fs");

var port = process.env["const"] || 3000;

var cookieParser = require("cookie-parser");

var e = require("express");

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
      name: name,
      password: password
    };
    userData.push(addUser);
    fs.writeFileSync("./userData.json", JSON.stringify(users));
    res.send(users);
  } catch (error) {
    console.error(error);
  }
});
app.post("/loginUser", function (req, res) {
  try {
    var _req$body2 = req.body,
        email = _req$body2.email,
        password = _req$body2.password;
    var userData = readUserData();
    var isUserPassOK = userData.some(function (elem) {
      return elem.email === email && elem.password === password;
    });

    if (isUserPassOK) {
      var userLogin = userData.find(function (elem) {
        return elem.email === email && elem.password === password;
      });
      res.cookie("cookieName", JSON.stringify(userLogin), {
        maxAge: 3000,
        httpOnly: true
      });
      res.send({
        ok: "Hello Raziel"
      });
    } else {
      throw new Error("wrong email or password");
    }

    app.get("/getCookie", function (req, res) {
      try {
        var cookieName = req.cookies.cookieName;
        var cookie = JSON.parse(cookieName);
        res.send(cookie);
      } catch (e) {
        res.status(500).send({
          error: "".concat(e.message)
        });
      }
    });
  } catch (e) {
    console.error(e);
  }
});
app.get("/getCookie", function (req, res) {
  try {
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    res.send(cookie);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e.message)
    });
  }
});
app.listen(port, function () {
  console.log("Server listen on port", port);
});