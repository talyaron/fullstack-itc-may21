"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var Ajv = require("ajv");

var _require = require('./models.js'),
    User = _require.User,
    Users = _require.Users,
    Survey = _require.Survey,
    Surveys = _require.Surveys,
    Question = _require.Question,
    Questions = _require.Questions; // Routes


var loginRoute = require('./routes/loginRoute');

var questionsRoute = require('./routes/questionsRoute');

var surveysRoute = require('./routes/surveysRoute');

var usersRoute = require('./routes/usersRoute');

var app = express();
var ajv = new Ajv();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());
var users = new Users();
var selectedAdmin = {};
var selectedAdminIndex = 0; // Route to create user

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
}); // Login route

app.use('/login', loginRoute); // Route to add a survey

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
        selectedAdminIndex = index;
      }
    });
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
}); // Route to post a question

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
    users.users[selectedAdminIndex] = selectedAdmin;
    console.log(users.users);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
}); // Route to send selected Admin

app.get('/selectedAdminUser', function (req, res) {
  res.send(selectedAdmin);
}); // Listen on port

app.listen(port, function () {
  console.log('Server listen on port', port);
});
console.log(users);