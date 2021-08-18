"use strict";
exports.__esModule = true;
exports.deleteSurveys = exports.addSurveys = exports.getPreviousSurvey = exports.getUniqueId = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var surveyModels_1 = require("../models/surveyModels");
var readAllSurveys = function () {
    var allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
};
function getUniqueId(req, res) {
    var id = uuidv4();
    res.send({ id: id });
}
exports.getUniqueId = getUniqueId;
// export function getUniqueIdQuestions(req, res) {
//     const id = uuidv4()
//     res.send({ id: id })
// }
function getPreviousSurvey(req, res) {
    var id = req.params.id;
    var allSurveys = readAllSurveys();
    var survey = allSurveys.find(function (survey) { return survey.id === id; });
    console.log(id);
    res.send(survey);
}
exports.getPreviousSurvey = getPreviousSurvey;
function addSurveys(req, res) {
    try {
        var allSurveys = readAllSurveys();
        var survey = new surveyModels_1.Survey(req.body.id, req.body.title, req.body.email, req.body.questions);
        allSurveys.push(survey);
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
        var allUsers = JSON.parse(fs.readFileSync("./users.json"));
        var surveyUser = allUsers.find(function (user) { return user.email === req.body.email; });
        surveyUser.surveys.push(req.body);
        fs.writeFileSync("./users.json", JSON.stringify(allUsers));
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
        var allUsers = JSON.parse(fs.readFileSync("./users.json"));
        var user = allUsers.filter(function (user) { return user.email === email_1; });
        user[0].surveys = user[0].surveys.filter(function (survey) { return survey.id !== id_1; });
        fs.writeFileSync("./users.json", JSON.stringify(allUsers));
        //eliminar de json surveys
        allSurveys = allSurveys.filter(function (survey) { return survey.id !== id_1; });
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
        var allUsersUser = JSON.parse(fs.readFileSync("./users.json"));
        var find = allUsersUser.find(function (user) { return user.email === email_1; });
        res.send(find.surveys);
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.deleteSurveys = deleteSurveys;
