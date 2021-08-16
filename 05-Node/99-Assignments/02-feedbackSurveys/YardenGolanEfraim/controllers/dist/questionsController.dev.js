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
    var questions = body.questions; //YS: You can destructure both of them: const { questions, surveyId } = body

    var surveyID = body.surveyID;
    questions.forEach(function (question) {
      selectedAdmin.createdSurvey.find(function (survey) {
        return survey.surveyID === surveyID;
      }).questions.push(new Question(question)); //YS: Find method returns a object, where is the object? It should be made into a varbiable. 
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