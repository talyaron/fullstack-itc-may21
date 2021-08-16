"use strict";
exports.__esModule = true;
exports.editSelectedSurvey = exports.getSelectedSurvey = exports.saveSelectedSurvey = exports.deleteSurvey = exports.getLogInUser = exports.addSurveys = exports.getAllUsers = exports.getAllSurveys = void 0;
var express = require("express");
var app = express();
var fs = require("fs");
var uuidv4 = require('uuid').v4;
var cookieParser = require("cookie-parser");
var survey_1 = require("../models/survey");
app.use(express.json());
app.use(cookieParser());
// READ SURVEY JSON
exports.getAllSurveys = function () {
    var fileJson = fs.readFileSync("./db/survey.json");
    return JSON.parse(fileJson);
};
// READ USERS JSON`
exports.getAllUsers = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
function addSurveys(req, res) {
    // add survay from class to survay.json
    var getSuverys = exports.getAllSurveys();
    var getCookie = JSON.parse(req.cookies.cookieName);
    var id = uuidv4();
    var newSurvey = new survey_1.Survey(id, req.body.title, getCookie.email, req.body.questions);
    getSuverys.push(newSurvey);
    fs.writeFileSync("./db/survey.json", JSON.stringify(getSuverys));
    var getUsers = exports.getAllUsers();
    var survUser = getUsers.find(function (user) { return user.email === getCookie.email; });
    survUser.createSurvey.push(newSurvey);
    fs.writeFileSync("./db/users.json", JSON.stringify(getUsers));
    res.send({ ok: "success" });
}
exports.addSurveys = addSurveys;
function getLogInUser(req, res) {
    var getUsers = exports.getAllUsers();
    var getCookie = JSON.parse(req.cookies.cookieName);
    var findLogInUser = getUsers.find(function (user) { return user.email === getCookie.email; });
    res.send(findLogInUser);
}
exports.getLogInUser = getLogInUser;
function deleteSurvey(req, res) {
    var id = req.params.id;
    var getUsers = exports.getAllUsers();
    var getCookie = JSON.parse(req.cookies.cookieName);
    var findLogInUser = getUsers.findIndex(function (user) { return user.email === getCookie.email; });
    var find = getUsers.find(function (user) { return user.email === getCookie.email; });
    getUsers[findLogInUser].createSurvey = find.createSurvey.filter(function (surv) { return surv.id !== id; });
    fs.writeFileSync("./db/users.json", JSON.stringify(getUsers));
    var getSurvey = exports.getAllSurveys();
    getSurvey = getSurvey.filter(function (survey) { return survey.id !== id; });
    fs.writeFileSync("./db/survey.json", JSON.stringify(getSurvey));
    res.send({ ok: "succes" });
}
exports.deleteSurvey = deleteSurvey;
function saveSelectedSurvey(req, res) {
    var id = req.params.id;
    res.cookie('idSelected', id, { maxAge: 300000000, httpOnly: true });
    res.send({ ok: "succes" });
}
exports.saveSelectedSurvey = saveSelectedSurvey;
function getSelectedSurvey(req, res) {
    var getCookie = req.cookies.idSelected;
    var getSuverys = exports.getAllSurveys();
    var selectedSurv = getSuverys.find(function (survey) { return survey.id === getCookie; });
    res.send(selectedSurv);
}
exports.getSelectedSurvey = getSelectedSurvey;
function editSelectedSurvey(req, res) {
    var idCookie = req.cookies.idSelected;
    var getSuverys = exports.getAllSurveys();
    var indexSelectedSurv = getSuverys.findIndex(function (survey) { return survey.id === idCookie; });
    var title = req.body.title;
    var question = req.body.question;
    getSuverys[indexSelectedSurv].title = title;
    getSuverys[indexSelectedSurv].question = question;
    fs.writeFileSync("./db/survey.json", JSON.stringify(getSuverys));
    var getUsers = exports.getAllUsers();
    var getCookie = JSON.parse(req.cookies.cookieName);
    var findUser = getUsers.findIndex(function (user) { return user.email === getCookie.email; });
    var findSuveryUser = getUsers[findUser].createSurvey.find(function (survey) { return survey.id === idCookie; });
    findSuveryUser.title = title;
    findSuveryUser.question = question;
    fs.writeFileSync("./db/users.json", JSON.stringify(getUsers));
    res.send({ ok: "succes" });
}
exports.editSelectedSurvey = editSelectedSurvey;
