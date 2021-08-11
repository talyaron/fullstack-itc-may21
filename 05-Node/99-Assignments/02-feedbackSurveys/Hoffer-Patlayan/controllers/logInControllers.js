"use strict";
exports.__esModule = true;
exports.logInUser = void 0;
// import {User} from '../models/users';
var fs = require("fs");
// LEER JSON Users
var localJson = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
function logInUser(req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password_1 = _a.password;
        var users = localJson();
        var correctUser = users.some(function (elements) {
            return elements.email === email_1 &&
                elements.password === password_1;
        });
        if (correctUser) {
            var doLogin = users.find(function (elements) {
                return elements.email === email_1 &&
                    elements.password === password_1;
            });
            res.cookie("cookieName", JSON.stringify(doLogin), {
                maxAge: 300000,
                httpOnly: true
            });
            res.send({ userInfo: doLogin });
        }
        else {
            throw new Error("No hay PEPE");
        }
    }
    catch (e) {
        res.status(500).send({ e: "" + e });
    }
}
exports.logInUser = logInUser;
;
