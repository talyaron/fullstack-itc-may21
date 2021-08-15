"use strict";

var _require = require('../models.js'),
    Question = _require.Question,
    users = _require.users;

exports.post_questions = function (req, res) {
  try {
    var body = req.body;
    var admin = req.cookies.admin;
    var cookie = JSON.parse(admin);
    var selectedAdmin = cookie.selectedAdmin;
    var adminIndex = req.cookies.adminIndex;
    var cookieIndex = JSON.parse(adminIndex);
    var selectedAdminIndex = cookieIndex.selectedAdminIndex;
    var questions = body.questions;
    var surveyID = body.surveyID;
    questions.forEach(function (question) {
      selectedAdmin.createdSurvey.find(function (survey) {
        return survey.surveyID === surveyID;
      }).questions.push(new Question(question));
    });
    users.users[selectedAdminIndex] = selectedAdmin;
    var adminCookie = JSON.stringify({
      selectedAdmin: selectedAdmin
    });
    res.cookie('admin', adminCookie, {
      maxAge: 300000000,
      httpOnly: true
    });
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};