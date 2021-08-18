"use strict";
exports.__esModule = true;
exports.updateQuestionsSurvey = exports.editQuestion = exports.deleteQuestion = exports.getQuestionsSurvey = exports.addQuestion = exports.deleteSurvey = exports.newSurvey = exports.getSurveys = void 0;
var surveys_1 = require("../models/surveys");
//Function to get all the surveys from a specific user
function getSurveys(req, res) {
    try {
        var admin = req.email;
        var allSurveys = new surveys_1.Surveys();
        var surveys = allSurveys.findUserSurveys(admin);
        res.send({
            message: "You get all the surveys from the user login",
            surveys: surveys,
            admin: admin
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getSurveys = getSurveys;
//Function to create an empty survey
function newSurvey(req, res) {
    try {
        //User email sended by params in the URL
        var admin = req.email;
        var newSurvey_1 = { uuid: null, title: null, admin: admin, questions: null };
        var survey = new surveys_1.Survey(newSurvey_1);
        var allSurveys = new surveys_1.Surveys();
        allSurveys.createSurvey(survey);
        res.send({ message: "A new Survey was added", survey: survey });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.newSurvey = newSurvey;
//Function to delete the completly survey
function deleteSurvey(req, res) {
    try {
        var uuid = req.params.uuid;
        var allSurveys = new surveys_1.Surveys();
        allSurveys.deleteSurvey(uuid);
        res.send({ message: "The survey was deleted", userDetails: req.email });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.deleteSurvey = deleteSurvey;
//Function to add a new question into the survey
function addQuestion(req, res) {
    try {
        var uuid = req.params.uuid;
        var allSurveys = new surveys_1.Surveys();
        var surveyToUpdate = new surveys_1.Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
        var newQuestion = new surveys_1.Question(req.body.question);
        var howManyQuestions = surveyToUpdate.addQuestion(newQuestion);
        var disableAddQuestionBtn = false;
        var disableSubmitSurvey = false;
        if (howManyQuestions > 9)
            disableAddQuestionBtn = true;
        if (howManyQuestions === 0)
            disableSubmitSurvey = true;
        allSurveys.updateSurvey(surveyToUpdate);
        res.send({
            message: "A new Question was added",
            survey: surveyToUpdate,
            disableAddQuestionBtn: disableAddQuestionBtn,
            disableSubmitSurvey: disableSubmitSurvey
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.addQuestion = addQuestion;
// //Function to get a question from a specific survey
function getQuestionsSurvey(req, res) {
    try {
        //User email sended by params in the URL
        var uuid = req.params.uuid;
        var allSurveys = new surveys_1.Surveys();
        var surveyToUpdate = allSurveys.surveys[allSurveys.findSurveyIndex(uuid)];
        res.send({ survey: surveyToUpdate });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getQuestionsSurvey = getQuestionsSurvey;
//Function to delete a question
function deleteQuestion(req, res) {
    try {
        var _a = req.params, qUuid = _a.qUuid, uuid = _a.uuid; // qUuid: question uuid; uuid: survey uuid
        var allSurveys = new surveys_1.Surveys();
        var surveyToUpdate = new surveys_1.Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
        //Inside the questions of a specific Survey I will filter the question that I dont want
        var howManyQuestions = surveyToUpdate.deleteQuestion(qUuid);
        var disableAddQuestionBtn = false;
        var disableSubmitSurvey = false;
        if (howManyQuestions > 9)
            disableAddQuestionBtn = true;
        if (howManyQuestions === 0)
            disableSubmitSurvey = true;
        allSurveys.updateSurvey(surveyToUpdate);
        res.send({
            message: "A question was deleted",
            survey: surveyToUpdate,
            disableAddQuestionBtn: disableAddQuestionBtn,
            disableSubmitSurvey: disableSubmitSurvey
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.deleteQuestion = deleteQuestion;
function editQuestion(req, res) {
    try {
        var _a = req.params, qUuid = _a.qUuid, uuid = _a.uuid; // qUuid: question uuid; uuid: survey uuid
        var allSurveys = new surveys_1.Surveys();
        var surveyToUpdate = new surveys_1.Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
        var editedQuestion = new surveys_1.Question(req.body.questionContent);
        //Inside the questions of a specific Survey I will filter the question that I dont want
        surveyToUpdate.editQuestion(qUuid, editedQuestion.content);
        allSurveys.updateSurvey(surveyToUpdate);
        res.send({ message: "The question was edited", survey: surveyToUpdate });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.editQuestion = editQuestion;
//Function to update questions of a survey
function updateQuestionsSurvey(req, res) {
    try {
        var uuid = req.params.uuid;
        var allSurveys = new surveys_1.Surveys();
        var surveyToUpdate_1 = new surveys_1.Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
        var answeredQuestions = req.body;
        answeredQuestions.forEach(function (question) {
            return surveyToUpdate_1.updateQuestionRating(question.questionId, question.rating);
        });
        allSurveys.updateSurvey(surveyToUpdate_1);
        res.send({ message: "A new Question was added", survey: surveyToUpdate_1 });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.updateQuestionsSurvey = updateQuestionsSurvey;
