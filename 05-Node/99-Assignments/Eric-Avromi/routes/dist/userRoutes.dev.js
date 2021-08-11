"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/userModels.js'),
    addUsers = _require.addUsers;

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