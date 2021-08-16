"use strict";
exports.__esModule = true;
exports.deleteSurveys = exports.addSurveys = exports.getPreviousSurvey = exports.getUniqueIdQuestions = exports.getUniqueId = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var survey_1 = require("../models/survey");
var readAllSurveys = function () {
    var allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
};
function getUniqueId(req, res) {
    var id = uuidv4();
    res.send({ id: id });
}
exports.getUniqueId = getUniqueId;
function getUniqueIdQuestions(req, res) {
    var id = uuidv4();
    res.send({ id: id });
}
exports.getUniqueIdQuestions = getUniqueIdQuestions;
function getPreviousSurvey(req, res) {
    var id = req.params.id;
    var allSurveys = readAllSurveys();
    var survey = allSurveys.find(function (survey) { return survey.id === id; });
    res.send(survey);
}
exports.getPreviousSurvey = getPreviousSurvey;
function addSurveys(req, res) {
    try {
        var allSurveys = readAllSurveys();
        var survey = new survey_1.Survey(req.body.id, req.body.title, req.body.email, req.body.questions);
        allSurveys.push(survey);
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys)); //YS: This should be in a function and go in your models
        var allUsers = JSON.parse(fs.readFileSync("./user.json")); //YS: This should be in a function and go in your models
        var surveyUser = allUsers.find(function (user) { return user.email === req.body.email; }); //YS: This should be in a function and go in your models
        surveyUser.surveys.push(req.body); //YS: This should be in a function and go in your models
        fs.writeFileSync("./user.json", JSON.stringify(allUsers)); //YS: This should be in a function and go in your models
        res.send({ ok: "Surveys Created" });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.addSurveys = addSurveys;
function deleteSurveys(req, res) {
    try {
        var _a = req.params, id_1 = _a.id, email_1 = _a.email;
        var allSurveys = readAllSurveys();
        var allUsers = JSON.parse(fs.readFileSync("./user.json")); //YS: This should be in a function and go in your models
        var user = allUsers.filter(function (user) { return user.email === email_1; }); //YS: This should be in a function and go in your models
        user[0].surveys = user[0].surveys.filter(function (survey) { return survey.id !== id_1; }); //YS: This should be in a function and go in your models
        fs.writeFileSync("./user.json", JSON.stringify(allUsers)); //YS: This should be in a function and go in your models
        //eliminar de json surveys
        allSurveys = allSurveys.filter(function (survey) { return survey.id !== id_1; }); //YS: This should be in a function and go in your models
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys)); //YS: This should be in a function and go in your models
        var allUsersUser = JSON.parse(fs.readFileSync("./user.json")); //YS: This should be in a function and go in your models
        var find = allUsersUser.find(function (user) { return user.email === email_1; }); //YS: This should be in a function and go in your models
        res.send(find.surveys);
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.deleteSurveys = deleteSurveys;
