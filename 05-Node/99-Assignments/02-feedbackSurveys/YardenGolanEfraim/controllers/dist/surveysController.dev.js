"use strict";

var _require = require('../models.js'),
    Survey = _require.Survey,
    users = _require.users,
    getAdminCookie = _require.getAdminCookie,
    createAdminCookie = _require.createAdminCookie,
    getAdminCookieIndex = _require.getAdminCookieIndex;

var Ajv = require("ajv");

var ajv = new Ajv();

exports.delete_survey = function (req, res) {
  try {
    var ID = req.params.ID;
    var selectedAdmin = getAdminCookie(req);
    selectedAdmin.createdSurvey = selectedAdmin.createdSurvey.filter(function (survey) {
      return survey.surveyID != ID;
    });
    var selectedAdminIndex = getAdminCookieIndex(req);
    users.users[selectedAdminIndex] = selectedAdmin;
    createAdminCookie(selectedAdmin, res);
    res.send(selectedAdmin);
  } catch (e) {
    console.error(e);
  }
};

exports.send_survey = function (req, res) {
  try {
    var id = req.query.id;
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
    }

    users.users.map(function (user, index) {
      if (user.email === body.adminEmail) {
        users.users[index].createdSurvey.push(new Survey(body.surveyName, body.adminEmail));
        var selectedAdmin = users.users[index];
        var selectedAdminIndex = index;
        createAdminCookie(selectedAdmin, res);
        var adminCookieIndex = JSON.stringify({
          selectedAdminIndex: selectedAdminIndex
        });
        res.cookie('adminIndex', adminCookieIndex, {
          maxAge: 300000000,
          httpOnly: true
        });
        res.send(selectedAdmin);
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
    var selectedAdmin = getAdminCookie(req);
    var surveyInfo = selectedAdmin.createdSurvey.filter(function (survey) {
      return survey.surveyID === editID;
    });
    res.send(surveyInfo);
  } catch (e) {
    console.error(e);
  }
};

exports.survey_to_answer = function (req, res) {
  var selectedAdmin = getAdminCookie(req);
  var id = req.query.id;
  var surveyRequired = selectedAdmin.createdSurvey.filter(function (survey) {
    return survey.surveyID === id;
  });
  res.send(surveyRequired);
};