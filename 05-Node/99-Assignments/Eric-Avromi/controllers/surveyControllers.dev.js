"use strict";

var fs = require("fs");

var _require = require("uuid"),
    uuidv4 = _require.v4;

var surveys = require('../survey.json');

function getAllSurveys(req, res) {
  console.log('getAllSurveys');
  console.log(req.user);
  var user = req.user;

  if (user) {
    var userSurveys = surveys.filter(function (survey) {
      return survey.admin === user.email;
    });
    res.send({
      surveys: userSurveys
    });
  } else {
    res.send({
      surveys: [],
      error: "No user was found"
    });
  }
}

exports.getAllSurveys = getAllSurveys;