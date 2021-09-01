"use strict";

exports.__esModule = true;
exports.loginUser = exports.userRegister = void 0;

var fs = require("fs");

var user_1 = require("../models/user");

var usersClass = new user_1.Users();

function userRegister(req, res) {
  var isAdmin = false;
  var adminEmails = ["kobrinskye@gmail.com", "tal@gmail.com"];

  if (adminEmails.includes(req.body.email)) {
    isAdmin = true;
  }

  var user = new user_1.User(req.body.email, req.body.password, req.body.username, isAdmin, []);
  usersClass.addUser(user);
  res.send({
    user: user
  });
}

exports.userRegister = userRegister;

function loginUser(req, res) {
  try {
    var _a = req.body,
        email_1 = _a.email,
        password_1 = _a.password;
    var allUsers = usersClass.userList;
    var isUserPassOK = allUsers.some(function (elem) {
      return elem.email === email_1 && elem.password === password_1;
    });

    if (isUserPassOK) {
      var userLogin = allUsers.find(function (elem) {
        return elem.email === email_1 && elem.password === password_1;
      });
      res.cookie('cookieName', {
        isAdmin: userLogin.isAdmin,
        id: userLogin.id
      }, {
        maxAge: 30000000,
        httpOnly: false
      });
      res.send({
        userLogin: userLogin
      });
    } else {
      throw new Error("Is incorrect your email or password. Try Again");
    }
  } catch (e) {
    res.status(500).send({
      error: "" + e.message
    });
  }
}

exports.loginUser = loginUser;