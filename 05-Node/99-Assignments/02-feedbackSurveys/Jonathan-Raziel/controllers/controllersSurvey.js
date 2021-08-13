"use strict";
exports.__esModule = true;
exports.addSurveys = exports.getPreviousSurvey = exports.getUniqueId = void 0;
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
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
        var allUsers = JSON.parse(fs.readFileSync("./user.json"));
        var surveyUser = allUsers.find(function (user) { return user.email === req.body.email; });
        surveyUser.surveys.push(req.body);
        fs.writeFileSync("./user.json", JSON.stringify(allUsers));
        res.send({ ok: "Surveys Created" });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.addSurveys = addSurveys;
// export function deleteSurveys(req,res){
//     try {
//         const {id,email} = req.params
//         let allSurveys = readAllSurveys();
//          if(allSurveys.length !== 0){
//             //  console.log(allSurveys)
//             //  allSurveys = allSurveys.filter(user => (user.id !== id))
//             // // const findSurveyToDelete = userFind.surveys.filter(survey => survey.id !== id)
//             // fs.writeFileSync("./user.json", JSON.stringify(allSurveys));
//             // res.send(allSurveys)
//          } 
//     } catch (e) {
//         res.status(500).send({ error: `${e}` });
//     }
// }
