"use strict";
exports.__esModule = true;
exports.add_user = exports.get_users = void 0;
var usersModel_1 = require("../models/usersModel");
var users = new usersModel_1.UsersList();
function get_users(req, res) {
    res.send({ users: users.usersArray });
}
exports.get_users = get_users;
function add_user(req, res) {
    try {
        var _a = req.body, name = _a.name, imgUrl = _a.imgUrl, color = _a.color;
        if (!name || !imgUrl || !color)
            throw new Error('Missing input');
        var newUser = new usersModel_1.User(name, imgUrl, color);
        users.addUser(newUser);
        console.log(newUser);
        res.send({ users: users.usersArray });
    }
    catch (error) {
        console.error(error);
    }
}
exports.add_user = add_user;
