"use strict";

var _require = require('../models.js'),
    Question = _require.Question,
    users = _require.users,
    getAdminCookie = _require.getAdminCookie,
    createAdminCookie = _require.createAdminCookie,
    getAdminCookieIndex = _require.getAdminCookieIndex;

exports.post_questions = function (req, res) {
  try {
    var body = req.body;
    var selectedAdmin = getAdminCookie(req);
    var selectedAdminIndex = getAdminCookieIndex(req);
    var questions = body.questions;
    var surveyID = body.surveyID;
    questions.forEach(function (question) {
      selectedAdmin.createdSurvey.find(function (survey) {
        return survey.surveyID === surveyID;
      }).questions.push(new Question(question));
    });
    users.users[selectedAdminIndex] = selectedAdmin;
    createAdminCookie(selectedAdmin, res);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};