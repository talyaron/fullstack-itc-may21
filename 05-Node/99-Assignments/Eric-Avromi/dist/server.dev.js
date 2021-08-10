"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

var fs = require("fs"); //do  the same to questions .json?


var surveyRouter = require('./routes/surveyRoute.js');

var _require = require('uuid'),
    uuidv4 = _require.v4; // do  the same to questions?


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
  this.admin = {//email:adminEmail
  };
};

app.use(express["static"]("public"));
app.use(express.json());
app.use('/survey', surveyRouter); //do the same for questionRouter?

app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});