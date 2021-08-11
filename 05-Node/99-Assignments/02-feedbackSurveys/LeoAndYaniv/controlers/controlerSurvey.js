"use strict";
exports.__esModule = true;
exports.getSurveys = exports.deleteSurvey = exports.deleteQuestion = exports.getQuestionsSurvey = exports.newSurvey = exports.addQuestion = exports.readJsonSurveys = void 0;
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
    fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
    res.send({ message: "A new Question was added", survey: surveyExist });
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
//Function to get a question from a specific survey
function getQuestionsSurvey(req, res) {
    //User email sended by params in the URL
    var uuid = req.params.uuid;
    var allSurveys = exports.readJsonSurveys();
    var surveyExist = allSurveys.find(function (survey) { return survey.uuid === uuid; });
    res.send({ survey: surveyExist });
}
exports.getQuestionsSurvey = getQuestionsSurvey;
//Function to delete a question
function deleteQuestion(req, res) {
    var _a = req.params, id = _a.id, uuid = _a.uuid;
    var allSurveys = exports.readJsonSurveys();
    var surveyExist = allSurveys.find(function (survey) { return survey.uuid === uuid; });
    //Inside the questions of a specific Survey I will filter the question that I dont want
    surveyExist.questions = surveyExist.questions.filter(function (survey) { return survey.uuid !== id; });
    fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
    res.send({ message: "A question was deleted", surveys: surveyExist });
}
exports.deleteQuestion = deleteQuestion;
//Function to delete the completly survey
function deleteSurvey(req, res) {
    var uuid = req.params.uuid;
    var allSurveys = exports.readJsonSurveys();
    allSurveys = allSurveys.filter(function (survey) { return survey.uuid !== uuid; });
    //Read cookies to send the data from the user login
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
    res.send({ message: "A question was deleted", userInfo: cookie.email });
}
exports.deleteSurvey = deleteSurvey;
//Function to get all the surveys from a specific user
function getSurveys(req, res) {
    try {
        var emailLogIn_1 = req.params.emailLogIn;
        var allSurveys = exports.readJsonSurveys();
        var surveysFromUser = allSurveys.filter(function (survey) { return survey.admin === emailLogIn_1; });
        res.send({
            message: "You get all the surveys from the user login",
            surveys: surveysFromUser
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
exports.getSurveys = getSurveys;
