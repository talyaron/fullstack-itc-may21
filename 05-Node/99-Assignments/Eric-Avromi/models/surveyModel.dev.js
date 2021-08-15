"use strict";

var path = require('path');

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

function addSurvey(newSurvey) {
  var allSurveys = getAllSurveys();
  allSurveys.push(newSurvey);
  fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
  return allSurveys;
}

function getAllSurveys() {
  var allSurveys = fs.readFileSync("./survey.json");
  var parsed = JSON.parse(allSurveys);
  return parsed;
}

exports.addSurvey = addSurvey;
exports.getAllSurveys = getAllSurveys;