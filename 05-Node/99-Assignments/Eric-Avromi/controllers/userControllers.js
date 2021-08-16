"use strict";
exports.__esModule = true;
exports.getSurveys = exports.getCookie = exports.loginUser = exports.register = void 0;
var fs = require("fs");
var uuid = require('uuidv4').uuid;
var userModels_1 = require("../models/userModels");
var getAllUsers = function () {
    var allUsers = fs.readFileSync("./users.json");
    return JSON.parse(allUsers);
};
function register(req, res) {
    var allUsers = getAllUsers();
    var isFound = allUsers.some(function (elem) { return (elem.email === req.body.email) || elem.name === req.body.name; });
    if (!isFound) {
        var user = new userModels_1.User(req.body.name, req.body.email, req.body.password, []);
        allUsers.push(user);
        fs.writeFileSync("./users.json", JSON.stringify(allUsers));
        res.send({ ok: "User Created", allUsers: allUsers });
    }
    else {
        throw new Error("this is user is on the list");
    }
}
exports.register = register;
function loginUser(req, res) {
    var _a = (req.body), email = _a.email, password = _a.password;
    var allUsers = getAllUsers();
    var isUserPassOK = allUsers.some(function (elem) { return (elem.email === email) && (elem.password === password); });
    if (isUserPassOK) {
        var userLogin = allUsers.find(function (elem) { return (elem.email === email) && (elem.password === password); });
        res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 30000000, httpOnly: true });
        res.send({ ok: 'Welcom admin' });
    }
    else {
        throw new Error("Is incorrect your email or password. Try Again");
    }
}
exports.loginUser = loginUser;
;
function getCookie(req, res) {
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    res.send(cookie);
}
exports.getCookie = getCookie;
;
function getSurveys(req, res) {
    var email = req.params.email;
    var allUsers = getAllUsers();
    if (allUsers.length !== 0) {
        var find = allUsers.find(function (user) { return user.email === email; });
        res.send(find.createdSurvey);
    }
}
exports.getSurveys = getSurveys;
