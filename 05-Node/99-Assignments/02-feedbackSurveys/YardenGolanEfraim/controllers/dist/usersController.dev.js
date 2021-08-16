"use strict";

var _require = require('../models.js'),
    User = _require.User,
    users = _require.users,
    createGuestCookie = _require.createGuestCookie;

var Ajv = require("ajv");

var ajv = new Ajv();

exports.add_user = function (req, res) {
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

    if (users.users.find(function (info) {
      return info.email === body.email;
    }) === undefined && body.password === "") {
      //Ok, could be more DRY and separate things into different variables/destructure
      users.newUser(new User(body.username, body.email, ""));
      var guestUser = users.users[users.users.length - 1];
      createGuestCookie(guestUser, res);
      res.send(guestUser);
    } else if (users.users.find(function (info) {
      return info.email === body.email && info.password === '';
    }) != undefined) {
      users.users.find(function (info) {
        return info.email === body.email;
      }).password = body.password;
      users.users.find(function (info) {
        return info.email === body.email;
      }).name = body.username;
      res.send(users);
    } else if (users.users.find(function (info) {
      return info.email === body.email && info.password != '' && body.password === "";
    }) != undefined) {
      var _guestUser = users.users.find(function (info) {
        return info.email === body.email;
      });

      createGuestCookie(_guestUser, res);
      res.send(_guestUser);
    } else if (users.users.find(function (info) {
      return info.email === body.email;
    }) != undefined) {
      res.send("Email already taken!");
    } else {
      users.newUser(new User(body.username, body.email, body.password));
      res.send("success!");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
};

exports.get_all_users = function (req, res) {
  res.send(users);
};