"use strict";

var models = require('../models');

var server = require('../server');

var Ajv = require("ajv");

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
    selectedAdmin = users.users.find(function (r) {
      return r.email === body.email && r.password === body.password;
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