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

exports.get_admin = function (req, res) {
  var admin = req.cookies.admin;
  var cookie = JSON.parse(admin);
  var selectedAdmin = cookie.selectedAdmin;
  res.send(selectedAdmin);
};