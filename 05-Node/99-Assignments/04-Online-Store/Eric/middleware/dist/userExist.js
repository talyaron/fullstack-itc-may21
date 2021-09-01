"use strict";
exports.__esModule = true;
exports.userExist = void 0;
var user_1 = require("../models/user");
exports.userExist = function (req, res, next) {
    var allUser = user_1.readAllUsers();
    var isFound = allUser.some(function (element) { return element.email === req.body.email; }); //YS: Why not use find instead of some? 
    if (isFound) {
        res.status(400).send({ error: "The User Already Exist" });
        return;
    }
    next();
};
