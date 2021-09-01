"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var users_1 = require("../models/users");
function isAdmin(req, res, next) {
    try {
        var allUsers = new users_1.Users();
        var userEmail = allUsers.findUser(req.email);
        if (userEmail.role === "admin") {
            next();
        }
        else {
            res.status(401).send("Your not valid on this page");
            return;
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
exports.isAdmin = isAdmin;
