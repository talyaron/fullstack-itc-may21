"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var router = express.Router();

var _require = require('uuid'),
    uuidv4 = _require.v4;

var _require2 = require('../models/userModels.js'),
    addUsers = _require2.addUsers; // const {getAllUsers} = require(`../models/userModels.js`)


var User = function User(name, email, password) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.id = uuidv4();
  this.createdSurvey = [];
};

router.post('/register', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new User(name, email, password);
  addUsers(newUser);
  res.cookie('cookie', {
    name: name,
    email: email
  }, {
    maxAge: 30000000,
    httpOnly: true
  }).send({
    ok: true
  });
});
router.post('/login', function (req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  var newUser = new User(email, password);
  addUsers(newUser);
  res.cookie('cookie', {
    email: email,
    password: password
  }, {
    maxAge: 30000000,
    httpOnly: true
  }).send({
    ok: true
  });
});
router.get('/userAdmin', function (req, res) {
  var cookie = req.cookies['cookie'];
  res.send({
    cookie: cookie
  });
});
module.exports = router;