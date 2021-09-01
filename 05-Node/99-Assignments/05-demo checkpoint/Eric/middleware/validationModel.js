"use strict";
exports.__esModule = true;
exports.isFirstNameExist = void 0;
var users_1 = require("../models/users");
var users = new users_1.Users();
function isFirstNameExist(req, res, next) {
    try {
        if (users !== undefined)
            next();
    }
    catch (error) {
    }
}
exports.isFirstNameExist = isFirstNameExist;
