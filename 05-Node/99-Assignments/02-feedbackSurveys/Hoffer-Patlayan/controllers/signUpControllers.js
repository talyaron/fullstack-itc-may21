"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var users_1 = require("../models/users");
var fs = require("fs");
// LEER JSON Users
var localJson = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
function registerUser(req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    var users = localJson();
    var user = new users_1.User(name, email, password);
    users.push(user);
    fs.writeFileSync("./db/users.json", JSON.stringify(users));
    console.log(users);
    res.send(users);
}
exports.registerUser = registerUser;
