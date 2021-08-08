"use strict";

var express = require('express');

var app = express();

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 5000;
app.use(express.json());

var Ajv = require("ajv");

var ajv = new Ajv();
app.use(express["static"]('public'));
app.use(cookieParser());
var user = '';
app.post('/createUser', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        firstName: {
          type: "string"
        },
        lastName: {
          type: "string"
        }
      },
      required: ["firstName", "lastName"],
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

    user = "".concat(body.firstName, " ").concat(body.lastName);
    console.log(user);
    var fullName = JSON.stringify({
      user: user
    });
    res.cookie('cookieName', fullName, {
      maxAge: 300000000,
      httpOnly: true
    });
    res.send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.get('/user', function (req, res) {
  //get name from the cookie
  //read cookies
  console.log(req.cookies);
  var cookieName = req.cookies.cookieName;
  var cookie = JSON.parse(cookieName);
  console.log(cookieName);
  var user = cookie.user;
  console.log(user);
  res.send({
    user: user
  });
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});