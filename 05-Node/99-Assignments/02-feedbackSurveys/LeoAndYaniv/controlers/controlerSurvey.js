"use strict";
exports.__esModule = true;
exports.deleteQuestion = exports.getQuestionsSurvey = exports.addQuestion = exports.deleteSurvey = exports.newSurvey = exports.getSurveys = void 0;
var surveys_1 = require("../models/surveys");
//Function to get all the surveys from a specific user
function getSurveys(req, res) {
    try {
        var emailLogIn = req.params.emailLogIn;
        var allSurveys = new surveys_1.Surveys;
        var surveysFromUser = allSurveys.findUserSurveys(emailLogIn);
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
//Function to create an empty survey
function newSurvey(req, res) {
    //User email sended by params in the URL
    var id = req.params.id; // admin email
    var newSurvey = { uuid: null, title: null, admin: id, questions: null };
    var survey = new surveys_1.Survey(newSurvey);
    var allSurveys = new surveys_1.Surveys;
    allSurveys.createSurvey(survey);
    res.send({ message: "A new Survey was added", survey: survey });
}
exports.newSurvey = newSurvey;
//Function to delete the completly survey
function deleteSurvey(req, res) {
    var uuid = req.params.uuid;
    var allSurveys = new surveys_1.Surveys;
    allSurveys.deleteSurvey(uuid);
    //Read cookies to send the data from the user login
    var userDetails = req.cookies.userDetails;
    var cookie = JSON.parse(userDetails);
    res.send({ message: "The survey was deleted", userInfo: cookie.email });
}
exports.deleteSurvey = deleteSurvey;
//Function to add a new question into the survey
function addQuestion(req, res) {
    var uuid = req.params.uuid;
    var allSurveys = new surveys_1.Surveys;
    var surveyToUpdate = new surveys_1.Survey(allSurveys.findSurvey(uuid));
    var newQuestion = new surveys_1.Question(req.body.question);
    surveyToUpdate.addQuestion(newQuestion);
    allSurveys.updateSurvey(surveyToUpdate);
    res.send({ message: "A new Question was added", survey: surveyToUpdate });
}
exports.addQuestion = addQuestion;
// //Function to get a question from a specific survey
function getQuestionsSurvey(req, res) {
    //User email sended by params in the URL
    var uuid = req.params.uuid;
    var allSurveys = new surveys_1.Surveys;
    var surveyToUpdate = allSurveys.findSurvey(uuid);
    res.send({ survey: surveyToUpdate });
}
exports.getQuestionsSurvey = getQuestionsSurvey;
//Function to delete a question
function deleteQuestion(req, res) {
    var _a = req.params, id = _a.id, uuid = _a.uuid; // id: question uuid; uuid: survey uuid
    var allSurveys = new surveys_1.Surveys();
    var surveyToUpdate = new surveys_1.Survey(allSurveys.findSurvey(uuid));
    //Inside the questions of a specific Survey I will filter the question that I dont want
    surveyToUpdate.deleteQuestion(id);
    allSurveys.updateSurvey(surveyToUpdate);
    res.send({ message: "A question was deleted", survey: surveyToUpdate });
}
exports.deleteQuestion = deleteQuestion;
