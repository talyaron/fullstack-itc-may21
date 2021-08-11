"use strict";
exports.__esModule = true;
exports.getInfo = exports.login = exports.newUser = exports.readJson = void 0;
var users_1 = require("../models/users");
var fs = require("fs");
//Function to read the JSON of created users
exports.readJson = function () {
    try {
        var users = fs.readFileSync("./users.json");
        return JSON.parse(users);
    }
    catch (error) {
        console.error(error);
    }
};
//Function to add a new user into the JSON
function newUser(req, res) {
    var user = new users_1.User(req.body.username, req.body.email, req.body.password);
    var allUsers = exports.readJson();
    allUsers.push(user);
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    var username = user.username, email = user.email;
    var userCookie = JSON.stringify({ username: username, email: email });
    res.cookie("cookieName", userCookie, { maxAge: 300000000, httpOnly: true });
    res.send({ message: "A new User was added", user: user });
}
exports.newUser = newUser;
//Function to login the user
function login(req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var allUsers = exports.readJson();
    var userExist = allUsers.find(function (user) { return user.email === email && user.password === password; });
    if (userExist) {
        var username = userExist.username;
        var userCookie = JSON.stringify({ username: username, email: email });
        res.cookie("cookieName", userCookie, { maxAge: 300000000, httpOnly: true });
        res.send({ userInfo: username });
    }
    else {
        res.send({
            message: "Username or password are wrong, try again!",
            userInfo: null
        });
    }
}
exports.login = login;
//Function to get the information from the cookie
function getInfo(req, res) {
    try {
        //Read cookies
        var cookieName = req.cookies.cookieName;
        var cookie = JSON.parse(cookieName);
        res.send({ cookie: cookie });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
exports.getInfo = getInfo;
