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
var uuid = require("uuidv4").uuid;
var survey_1 = require("../models/survey");
var readAllSurveys = function () {
    var allSurveys = fs.readFileSync("./surveys.json");
    return JSON.parse(allSurveys);
};
function addSurveys(req, res) {
    try {
        var allSurveys = readAllSurveys();
        console.log(req.body);
        var newSurvey = __assign({ "id": uuid.v4() }, req.body);
        var question = new survey_1.Survey(newSurvey.title, newSurvey.title, newSurvey.email, newSurvey.question);
        allSurveys.push(question);
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
        res.send({ ok: "Surveys Created", allSurveys: allSurveys });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.addSurveys = addSurveys;
