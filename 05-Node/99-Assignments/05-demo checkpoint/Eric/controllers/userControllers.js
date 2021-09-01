"use strict";
exports.__esModule = true;
exports.getUsers = exports.addUser = void 0;
var users_1 = require("../models/users");
var users = new users_1.Users();
function addUser(req, res) {
    var _a = req.body, firstname = _a.firstname, image = _a.image, color = _a.color;
    var user = new users_1.User(firstname, image, color);
    users.addUser(user);
    res.send({ users: users });
}
exports.addUser = addUser;
function getUsers(req, res) {
    res.send({ users: users });
}
exports.getUsers = getUsers;
