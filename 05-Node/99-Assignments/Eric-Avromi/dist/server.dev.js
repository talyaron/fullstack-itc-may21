"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

var _require = require("uuid"),
    uuidv4 = _require.v4;

var fs = require("fs");

var User = function User(name, email, password) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.id = uuidv4();
  this.createdSurvey = []; //this will get survey Id..
};

var Survey = function Survey(title) {
  _classCallCheck(this, Survey);

  this.title = title;
  this.id = uuidv4();
  this.questions = [];
  this.admin = {};
};

app.use(express["static"]("public"));
app.use(express.json());
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});