"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;
app.use(express.json());

var Ajv = require("ajv");

var ajv = new Ajv();
app.use(express["static"]('public'));
app.use(cookieParser());

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

  this.title = title, this.questionID = Math.random().toString(16).slice(2); // this.voters = [{ voterID: , score: }]
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
var selectedAdmin = {};
app.post('/createUser', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        username: {
          type: "string"
        },
        password: {
          type: "string"
        },
        email: {
          type: "string"
        }
      },
      required: ["username", "password", "email"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    }

    users.newUser(new User(body.username, body.email, body.password));
    res.send(users);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.post('/login', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        password: {
          type: "string"
        },
        email: {
          type: "string"
        }
      },
      required: ["password", "email"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    }

    console.log(users);
    console.log(users.users);
    selectedAdmin = users.users.find(function (r) {
      return r.email === body.email && r.password === body.password;
    });
    console.log(selectedAdmin);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.post('/addSurvey', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        adminEmail: {
          type: "string"
        },
        surveyName: {
          type: "string"
        }
      },
      required: ["surveyName", "adminEmail"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    } // users.users.find(find => find.email === body.email )


    users.users.map(function (user, index) {
      if (user.email === body.adminEmail) {
        users.users[index].createdSurvey.push(new Survey(body.surveyName, body.adminEmail));
        selectedAdmin = users.users[index];
      }
    });
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.post('/postQuestions', function (req, res) {
  try {
    var body = req.body;
    var questions = body.questions;
    var surveyID = body.surveyID;
    questions.forEach(function (question) {
      selectedAdmin.createdSurvey.find(function (survey) {
        return survey.surveyID === surveyID;
      }).questions.push(new Question(question));
    });
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.get('/selectedAdminUser', function (req, res) {
  res.send(selectedAdmin);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});