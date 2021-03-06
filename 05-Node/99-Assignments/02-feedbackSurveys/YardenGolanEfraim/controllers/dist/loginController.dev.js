"use strict";

var _require = require('../models.js'),
    users = _require.users,
    createAdminCookie = _require.createAdminCookie;

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

    var selectedAdmin = users.users.find(function (r) {
      return r.email === body.email && r.password === body.password;
    });
    createAdminCookie(selectedAdmin, res);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};