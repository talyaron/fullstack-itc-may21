"use strict";
exports.__esModule = true;
exports.newSurvey = exports.addQuestion = exports.readJsonSurveys = void 0;
var surveys_1 = require("../models/surveys");
var fs = require("fs");
//Function to read the JSON of created surveys
exports.readJsonSurveys = function () {
    try {
        var surveys = fs.readFileSync("./surveys.json");
        return JSON.parse(surveys);
    }
    catch (error) {
        console.error(error);
    }
};
//Function to add a new question into the survey
function addQuestion(req, res) {
    var uuid = req.params.uuid;
    var allSurveys = exports.readJsonSurveys();
    var surveyExist = allSurveys.find(function (survey) { return survey.uuid === uuid; });
    var newQuestion = new surveys_1.Question(req.body.question);
    surveyExist.questions.push(newQuestion);
    console.log(surveyExist);
    /*
    const allUsers = readJson();
    allUsers.push(user);
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    res.send({ message: "A new User was added", user: user }); */
}
exports.addQuestion = addQuestion;
//Function to create an empty survey
function newSurvey(req, res) {
    //User email sended by params in the URL
    var id = req.params.id;
    var survey = new surveys_1.Survey(id);
    var allSurveys = exports.readJsonSurveys();
    allSurveys.push(survey);
    fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
    res.send({ message: "A new Survey was added", survey: survey });
}
exports.newSurvey = newSurvey;
