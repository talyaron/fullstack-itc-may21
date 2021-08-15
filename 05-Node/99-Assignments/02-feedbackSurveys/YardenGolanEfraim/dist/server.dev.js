"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var Ajv = require("ajv");

var _require = require('ajv/dist/vocabularies/applicator/dependencies'),
    error = _require.error;

var _require2 = require('./models.js'),
    User = _require2.User,
    Users = _require2.Users,
    Survey = _require2.Survey,
    Surveys = _require2.Surveys,
    Question = _require2.Question,
    Questions = _require2.Questions,
    users = _require2.users; // Import routes


var loginRoute = require('./routes/loginRoute');

var questionsRoute = require('./routes/questionsRoute');

var surveysRoute = require('./routes/surveysRoute');

var usersRoute = require('./routes/usersRoute');

var adminRoute = require('./routes/adminRoute');

var votesRoutes = require('./routes/votesRoute');

var ajv = new Ajv();
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());
app.get('/sendSurvey', function (req, res) {
  try {
    var id = req.query.id;
    console.log(id);
    var idString = JSON.stringify(id);
    res.cookie('surveyEditID', idString, {
      maxAge: 300000000,
      httpOnly: true
    });
    res.send(id);
  } catch (e) {
    console.error(e);
  }
});
app.get('/getSurvey', function (req, res) {
  try {
    var surveyEditID = req.cookies.surveyEditID;
    var cookieEditID = JSON.parse(surveyEditID);
    var editID = cookieEditID;
    var admin = req.cookies.admin;
    var cookie = JSON.parse(admin);
    var selectedAdmin = cookie.selectedAdmin;
    console.log(selectedAdmin, editID);
    var surveyInfo = selectedAdmin.createdSurvey.filter(function (survey) {
      return survey.surveyID === editID;
    });
    res.send(surveyInfo);
  } catch (e) {
    console.error(e);
  }
});
app.get('/surveyToAnswer', function (req, res) {
  var admin = req.cookies.admin;
  var cookie = JSON.parse(admin);
  var selectedAdmin = cookie.selectedAdmin;
  var id = req.query.id;
  var surveyRequired = selectedAdmin.createdSurvey.filter(function (survey) {
    return survey.surveyID === id;
  });
  res.send(surveyRequired);
}); // Routes

app.use('/login', loginRoute);
app.use('/questions', questionsRoute);
app.use('/surveys', surveysRoute);
app.use('/users', usersRoute);
app.use('/admin', adminRoute);
app.use('/votes', votesRoutes);
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});