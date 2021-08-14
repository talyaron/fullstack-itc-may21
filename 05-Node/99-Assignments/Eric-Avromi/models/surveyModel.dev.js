"use strict";

var path = require('path'); // const filePath = path.resolve(__dirname, './survey.json')


var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

function addSurvey(newSurvey) {
  console.log("hello surbey ");
  var allSurveys = getAllSurveys();
  console.log("hello surbey 3 ");
  allSurveys.push(newSurvey);
  fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
  return allSurveys;
}

function getAllSurveys() {
  console.log('indie get all survey ');
  var allSurveys = fs.readFileSync("./survey.json");
  var parsed = JSON.parse(allSurveys);
  console.log('indie get after read y ');
  return parsed;
}

exports.addSurvey = addSurvey;