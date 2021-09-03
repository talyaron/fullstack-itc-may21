"use strict";
exports.__esModule = true;
exports.deleteUser = exports.getUsers = exports.addUser = void 0;
var user_1 = require("../models/user");
var users = new user_1.Users();
function addUser(req, res) {
    try {
        users.addUser(req.user);
        res.send({ message: "User Added", user: users });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.addUser = addUser;
function getUsers(req, res) {
    try {
        res.send({ user: users });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.getUsers = getUsers;
function deleteUser(req, res) {
    try {
        var id = req.params.id;
        users.deleteUser(id);
        res.send({ user: users });
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.deleteUser = deleteUser;
