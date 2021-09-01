"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bcrypt = void 0;

var bcrypt = require('bcrypt');

exports.bcrypt = bcrypt;

exports.encryptPwd = function (req, res, next) {
  var password = req.body.password;
  var saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(500).send('Error Encrypting');
      return;
    }

    req.body.password = hash;
    next();
  });
};