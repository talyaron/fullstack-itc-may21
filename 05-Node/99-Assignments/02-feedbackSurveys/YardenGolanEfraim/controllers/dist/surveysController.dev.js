"use strict";

var _require = require('../models.js'),
    User = _require.User,
    Users = _require.Users,
    Survey = _require.Survey,
    Surveys = _require.Surveys,
    Question = _require.Question,
    Questions = _require.Questions,
    users = _require.users;

var Ajv = require("ajv");

var ajv = new Ajv();

exports.send_survey = function (req, res) {
  try {
    var id = req.query.id;
    console.log(id);
    var idString = JSON.stringify(id);
    res.cookie('surveyEditID', idString, {
      maxAge: 300000000,
      httpOnly: true
    });
    res.send(id);
  } catch (e) {
    console.error(e);
  }
};

exports.add_survey = function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        adminEmail: {
          type: "string"
        },
        surveyName: {
          type: "string"
        }
      },
      required: ["surveyName", "adminEmail"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    } // users.users.find(find => find.email === body.email )


    users.users.map(function (user, index) {
      if (user.email === body.adminEmail) {
        users.users[index].createdSurvey.push(new Survey(body.surveyName, body.adminEmail));
        var selectedAdmin = users.users[index];
        var selectedAdminIndex = index;
        var adminCookie = JSON.stringify({
          selectedAdmin: selectedAdmin
        });
        var adminCookieIndex = JSON.stringify({
          selectedAdminIndex: selectedAdminIndex
        });
        res.cookie('admin', adminCookie, {
          maxAge: 300000000,
          httpOnly: true
        });
        res.cookie('adminIndex', adminCookieIndex, {
          maxAge: 300000000,
          httpOnly: true
        });
        res.send(selectedAdmin);
        console.log(selectedAdmin);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};

exports.get_survey = function (req, res) {
  try {
    var surveyEditID = req.cookies.surveyEditID;
    var cookieEditID = JSON.parse(surveyEditID);
    var editID = cookieEditID;
    var admin = req.cookies.admin;
    var cookie = JSON.parse(admin);
    var selectedAdmin = cookie.selectedAdmin;
    console.log(selectedAdmin, editID);
    var surveyInfo = selectedAdmin.createdSurvey.filter(function (survey) {
      return survey.surveyID === editID;
    });
    res.send(surveyInfo);
  } catch (e) {
    console.error(e);
  }
};

exports.survey_to_answer = function (req, res) {
  var admin = req.cookies.admin;
  var cookie = JSON.parse(admin);
  var selectedAdmin = cookie.selectedAdmin;
  var id = req.query.id;
  var surveyRequired = selectedAdmin.createdSurvey.filter(function (survey) {
    return survey.surveyID === id;
  });
  res.send(surveyRequired);
};