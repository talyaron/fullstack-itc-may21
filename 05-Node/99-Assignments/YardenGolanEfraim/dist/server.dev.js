"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;
app.use(express.json());

var Ajv = require("ajv");

var ajv = new Ajv();
app.use(express["static"]('public'));
app.use(cookieParser());

var Users =
/*#__PURE__*/
function () {
  function Users(name, email, password) {
    _classCallCheck(this, Users);

    this.name = name;
    this.email = email;
    this.password = password;
    this.createdSurvey = [];
  }

  _createClass(Users, [{
    key: "newUser",
    value: function newUser(user) {
      this.push(user);
    }
  }]);

  return Users;
}();

var Surveys = function Surveys(title, admin) {
  _classCallCheck(this, Surveys);

  this.surveyID = Math.random().toString(16).slice(2);
  this.title = title;
  this.admin = admin;
  this.questions = [];
};

var Questions = function Questions(title) {
  var voters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{
    voterID: voterID,
    score: score
  }];

  _classCallCheck(this, Questions);

  this.title = title, this.questionID = Math.random().toString(16).slice(2);
  this.voters = voters;
};

var users = new Users();
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

    users.newUser(new Users(body.username, body.email, body.password));
    console.log(users);
    res.send(users);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});