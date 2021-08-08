"use strict";

var express = require('express');

var app = express();

var fs = require('fs');

var port = process.env["const"] || 3500;

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express["static"]('public'));

function readUserData() {
  var userData = fs.readFileSync("./userData.json");
  return JSON.parse(userData);
}

app.post("/signUp", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      password = _req$body.password;
  var users = readUserData();
  var addUser = {
    name: name,
    password: password
  };
  users.push(addUser);
  fs.writeFileSync("./userData.json", JSON.stringify(users));
  res.send(users);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});