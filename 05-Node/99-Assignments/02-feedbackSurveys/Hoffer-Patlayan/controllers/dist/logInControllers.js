"use strict";
exports.__esModule = true;
exports.logInUser = void 0;
// import {User} from '../models/users';
var express_validator_1 = require("express-validator");
var fs = require("fs");
// LEER JSON Users
var localJson = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
function logInUser(req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var users = localJson();
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        var correctUser = users.some(function (elements) {
            return elements.email === email && elements.password === password;
        });
        if (correctUser) {
            var doLogin = users.find(function (elements) {
                return elements.email === email && elements.password === password;
            });
            res.cookie("cookieName", JSON.stringify(doLogin), {
                maxAge: 3000000,
                httpOnly: true
            });
            res.send({ userInfo: doLogin });
        }
        else {
            throw new Error('User no Found');
        }
    }
    catch (error) {
        res.status(500).send({ error: "" + error });
    }
}
exports.logInUser = logInUser;
