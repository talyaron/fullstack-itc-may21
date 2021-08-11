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
    Questions = _require.Questions; // Import routes


var loginRoute = require('./routes/loginRoute');

var questionsRoute = require('./routes/questionsRoute');

var surveysRoute = require('./routes/surveysRoute');

var usersRoute = require('./routes/usersRoute');

var adminRoute = require('./routes/adminRoute');

var app = express();
var ajv = new Ajv();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());
var users = new Users();
var selectedAdmin = {};
var selectedAdminIndex = 0; // Route to create user

app.use('/createUser', usersRoute); // Login route

app.use('/login', loginRoute); // Route to add a survey

app.use('/addSurvey', surveysRoute); // Route to post a question

app.use('/postQuestions', questionsRoute); // Route to send selected Admin

app.use('/selectedAdminUser', adminRoute); // Listen on port

app.listen(port, function () {
  console.log('Server listen on port', port);
});
console.log(users);