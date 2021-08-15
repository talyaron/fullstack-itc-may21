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

exports.login = function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        password: {
          type: "string"
        },
        email: {
          type: "string"
        }
      },
      required: ["password", "email"],
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

    console.log(users);
    console.log(users.users);
    var selectedAdmin = users.users.find(function (r) {
      return r.email === body.email && r.password === body.password;
    });
    var adminCookie = JSON.stringify({
      selectedAdmin: selectedAdmin
    });
    res.cookie('admin', adminCookie, {
      maxAge: 300000000,
      httpOnly: true
    });
    console.log(selectedAdmin);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};