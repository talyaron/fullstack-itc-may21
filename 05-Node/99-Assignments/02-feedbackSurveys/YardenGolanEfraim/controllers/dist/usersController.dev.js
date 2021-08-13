"use strict";

var models = require('../models');

var Ajv = require("ajv");

exports.addUser = function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        username: {
          type: "string"
        },
        password: {
          type: "string"
        },
        email: {
          type: "string"
        }
      },
      required: ["username", "password", "email"],
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

    users.newUser(new User(body.username, body.email, body.password));
    res.send(users);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};