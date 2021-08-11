"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var router = express.Router();

var _require = require('uuid'),
    uuidv4 = _require.v4; // do  the same to questions?


var _require2 = require('../models/userModels.js'),
    addUsers = _require2.addUsers;

var User = function User(name, email, password) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.id = uuidv4();
  this.createdSurvey = []; //this will get survey Id..
};

router.post('/register', function (req, res) {
  //class info from the form, create a new user like an instance
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new User(name, email, password);
  addUsers(newUser);
  res.cookie('cookie', {
    maxAge: 30000000,
    httpOnly: true
  }).send({
    ok: true
  });
}); // router.post('/login', (req, res) => {
//     //class info from the form, create a new user like an instance
//     const {
//         name,
//         email,
//         password
//     } = req.body
//     const user = new User(name, email, password)
//     addUsers(user);
//     res.cookie('cookie', {
//         maxAge: 30000000,
//         httpOnly: true
//     }).send({
//         ok: true
//     });
// });

module.exports = router;