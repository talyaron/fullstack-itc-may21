"use strict";
exports.__esModule = true;
exports.userExist = void 0;
var userModel_1 = require("../models/userModel");
exports.userExist = function (req, res, next) {
    var allUser = userModel_1.readUsers();
    var isFound = allUser.some(function (element) { return element.email === req.body.email; });
    if (isFound) {
        res.status(400).send('The User Already Exist');
        return;
    }
    next();
};
