"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var _a = require('../../controllers/dist/userControllers'), welcome = _a.welcome, register = _a.register, login = _a.login, logout = _a.logout, details = _a.details, allUsers = _a.allUsers;
var _b = require('../../middlewares/dist/userMiddlewares'), isLoggedInAndAuthenticated = _b.isLoggedInAndAuthenticated, doesUserExist = _b.doesUserExist, encryptPassword = _b.encryptPassword, validatePassword = _b.validatePassword;
router
    .get('/welcome', isLoggedInAndAuthenticated, doesUserExist, welcome)
    .post('/register', doesUserExist, encryptPassword, register)
    .post('/login', doesUserExist, validatePassword, login)
    .get('/logout', isLoggedInAndAuthenticated, doesUserExist, logout)
    .get('/details', isLoggedInAndAuthenticated, doesUserExist, details)
    .get('/all', isLoggedInAndAuthenticated, doesUserExist, allUsers);
module.exports = router;
