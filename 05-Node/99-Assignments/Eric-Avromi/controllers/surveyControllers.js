"use strict";
exports.__esModule = true;
exports.previousSurvey = exports.getIdQuestions = exports.getId = exports.deleteSurveys = exports.addSurveys = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var surveyModels_1 = require("../models/surveyModels");
var getAllSurveys = function () {
    var allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
};
function addSurveys(req, res) {
    var allSurveys = getAllSurveys();
    var survey = new surveyModels_1.Survey(req.body.id, req.body.title, req.body.email, req.body.questions);
    allSurveys.push(survey);
    fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
    var allUsers = JSON.parse(fs.readFileSync("./users.json"));
    var surveyUser = allUsers.find(function (user) { return user.email === req.body.email; });
    surveyUser.createdSurvey.push(req.body);
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    res.send({ ok: "Surveys Created" });
}
exports.addSurveys = addSurveys;
function deleteSurveys(req, res) {
    var _a = req.params, id = _a.id, email = _a.email;
    var allSurveys = getAllSurveys();
    var allUsers = JSON.parse(fs.readFileSync("./users.json"));
    var user = allUsers.filter(function (user) { return user.email === email; });
    user[0].createdSurvey = user[0].createdSurvey.filter(function (survey) { return survey.id !== id; });
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    //eliminar de json surveys
    allSurveys = allSurveys.filter(function (survey) { return survey.id !== id; });
    fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
    var allUsersUser = JSON.parse(fs.readFileSync("./users.json"));
    var find = allUsersUser.find(function (user) { return user.email === email; });
    res.send(find.createdSurvey);
}
exports.deleteSurveys = deleteSurveys;
function getId(req, res) {
    var id = uuidv4();
    res.send({ id: id });
}
exports.getId = getId;
function getIdQuestions(req, res) {
    var id = uuidv4();
    res.send({ id: id });
}
exports.getIdQuestions = getIdQuestions;
function previousSurvey(req, res) {
    var id = req.params.id;
    var allSurveys = getAllSurveys();
    var survey = allSurveys.find(function (survey) { return survey.id === id; });
    res.send(survey);
}
exports.previousSurvey = previousSurvey;
