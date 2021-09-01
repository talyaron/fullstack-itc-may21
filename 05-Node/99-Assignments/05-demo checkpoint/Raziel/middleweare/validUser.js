"use strict";
exports.__esModule = true;
exports.checkUserExists = void 0;
var users_1 = require("../model/users");
function checkUserExists(req, res, next) {
    try {
        var email = req.body.email;
        //Get all users to see if the user already exist
        var allUsers = new users_1.Users();
        allUsers.users;
        var userExist = allUsers.finduser(email);
        if (userExist) {
            res.status(400).send('User already exist');
            return;
        }
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.checkUserExists = checkUserExists;
