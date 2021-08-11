"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.addSurveys = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var survey_1 = require("../models/survey");
var readAllSurveys = function () {
    var allSurveys = fs.readFileSync("./survey.json");
    return JSON.parse(allSurveys);
};
function addSurveys(req, res) {
    try {
        var allSurveys = readAllSurveys();
        var newSurvey_1 = __assign({ id: uuidv4() }, req.body);
        var survey = new survey_1.Survey(newSurvey_1.id, newSurvey_1.title, newSurvey_1.email, newSurvey_1.questions);
        allSurveys.push(survey);
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
        var allUsers = JSON.parse(fs.readFileSync("./user.json"));
        var surveyUser = allUsers.find(function (user) { return user.email === newSurvey_1.email; });
        surveyUser.surveys.push(newSurvey_1);
        fs.writeFileSync("./user.json", JSON.stringify(allUsers));
        res.send({ ok: "Surveys Created" });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.addSurveys = addSurveys;
