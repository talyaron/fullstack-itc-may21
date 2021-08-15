"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Classes: User & Users, Survey & Surveys, Question & Questions
var User = function User(name, email, password) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.createdSurvey = [];
};

var Users =
/*#__PURE__*/
function () {
  function Users() {
    _classCallCheck(this, Users);

    this.users = [];
  }

  _createClass(Users, [{
    key: "newUser",
    value: function newUser(user) {
      this.users.push(user);
    }
  }]);

  return Users;
}();

var Survey = function Survey(title, admin) {
  _classCallCheck(this, Survey);

  this.surveyID = Math.random().toString(16).slice(2);
  this.title = title;
  this.admin = admin;
  this.questions = [];
};

var Surveys =
/*#__PURE__*/
function () {
  function Surveys() {
    _classCallCheck(this, Surveys);

    this.surveys = [];
  }

  _createClass(Surveys, [{
    key: "newSurvey",
    value: function newSurvey(survey) {
      this.surveys.push(survey);
    }
  }]);

  return Surveys;
}();

var Question = function Question(title) {
  _classCallCheck(this, Question);

  this.title = title, this.questionID = Math.random().toString(16).slice(2);
  this.voters = {
    voterID: [],
    score: []
  };
};

var Questions =
/*#__PURE__*/
function () {
  function Questions() {
    _classCallCheck(this, Questions);

    this.questions = [];
  }

  _createClass(Questions, [{
    key: "newQuestion",
    value: function newQuestion(question) {
      this.questions.push(question);
    }
  }]);

  return Questions;
}();

var users = new Users();
module.exports = {
  User: User,
  Users: Users,
  Survey: Survey,
  Surveys: Surveys,
  Question: Question,
  Questions: Questions,
  users: users
};