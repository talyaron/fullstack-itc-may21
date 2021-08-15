"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Surveys = exports.Survey = exports.Question = exports.Rating = exports.readJsonSurveys = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var surveysJsonPath = path.resolve(__dirname, "./surveys.json");
//Function to read the JSON of created surveys
exports.readJsonSurveys = function () {
    try {
        var surveys = fs.readFileSync(surveysJsonPath);
        var surveysInCreation = JSON.parse(surveys);
        var surveysWithTitles = JSON.parse(surveys);
        surveysWithTitles = surveysWithTitles.filter(function (survey) { return survey.title !== ''; });
        // keep surveys created in last 15 mins, even WO title
        surveysInCreation = surveysInCreation.filter(function (survey) { return (Date.now() - survey.createdDate < 900000); });
        surveysInCreation = surveysInCreation.filter(function (survey) { return survey.title === ''; });
        var surveysToKeep = __spreadArrays(surveysWithTitles, surveysInCreation);
        return surveysToKeep;
    }
    catch (error) {
        console.error(error);
    }
};
var Rating = /** @class */ (function () {
    function Rating() {
        this.filler = null;
        this.rating = null;
    }
    return Rating;
}());
exports.Rating = Rating;
var Question = /** @class */ (function () {
    function Question(content) {
        this.uuid = uuidv4();
        this.content = content;
        this.ratings = []; //when user raiting update
    }
    return Question;
}());
exports.Question = Question;
var Survey = /** @class */ (function () {
    function Survey(_a) {
        var uuid = _a.uuid, title = _a.title, admin = _a.admin, questions = _a.questions;
        this.uuid = uuid === null ? uuidv4() : uuid;
        this.title = uuid === null ? "" : title;
        this.admin = admin;
        this.questions = (questions === null) ? [] : questions; //when the user push add here
        this.createdDate = Date.now();
    }
    Survey.prototype.addQuestion = function (newQuestion) {
        try {
            this.questions.push(newQuestion);
            return this.questions.length;
        }
        catch (error) {
            console.error(error);
        }
    };
    Survey.prototype.deleteQuestion = function (questionId) {
        try {
            this.questions = this.questions.filter(function (question) { return (question.uuid !== questionId); });
            return this.questions.length;
        }
        catch (error) {
            console.error(error);
        }
    };
    Survey.prototype.editQuestion = function (questionId, editedQuestion) {
        try {
            var questionToEditIndex = this.questions.findIndex(function (question) { return (question.uuid === questionId); });
            this.questions[questionToEditIndex].content = editedQuestion;
        }
        catch (error) {
            console.error(error);
        }
    };
    Survey.prototype.updateQuestionRating = function (questionId, questionRating) {
        try {
            var questionToEditIndex = this.questions.findIndex(function (question) { return (question.uuid === questionId); });
            this.questions[questionToEditIndex].ratings.push(questionRating);
        }
        catch (error) {
            console.error(error);
        }
    };
    return Survey;
}());
exports.Survey = Survey;
var Surveys = /** @class */ (function () {
    function Surveys() {
        this.surveys = exports.readJsonSurveys();
    }
    Surveys.prototype.updateSurveysJson = function () {
        try {
            fs.writeFileSync(surveysJsonPath, JSON.stringify(this.surveys));
        }
        catch (error) {
            console.error(error);
        }
    };
    Surveys.prototype.updateTitleSurveysJson = function (updatedSurveys) {
        try {
            fs.writeFileSync(surveysJsonPath, JSON.stringify(updatedSurveys));
        }
        catch (error) {
            console.error(error);
        }
    };
    Surveys.prototype.findUserSurveys = function (adminEmail) {
        try {
            var adminSurveys = this.surveys.filter(function (survey) { return survey.admin === adminEmail; });
            return adminSurveys;
        }
        catch (error) {
            console.error(error);
        }
    };
    Surveys.prototype.createSurvey = function (newSurvey) {
        try {
            this.surveys.push(newSurvey);
            this.updateSurveysJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Surveys.prototype.deleteSurvey = function (surveyUuid) {
        try {
            this.surveys = this.surveys.filter(function (survey) { return survey.uuid !== surveyUuid; });
            this.updateSurveysJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Surveys.prototype.findSurveyIndex = function (surveyUuid) {
        try {
            var surveyIndex = this.surveys.findIndex(function (surveyItem) { return surveyItem.uuid === surveyUuid; });
            return surveyIndex;
        }
        catch (error) {
            console.error(error);
        }
    };
    Surveys.prototype.updateSurvey = function (surveyToUpdate) {
        try {
            this.surveys[this.findSurveyIndex(surveyToUpdate.uuid)] = surveyToUpdate;
            this.updateSurveysJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    return Surveys;
}());
exports.Surveys = Surveys;
