"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var users_1 = require("../models/users");
var express_validator_1 = require("express-validator");
var fs = require("fs");
// LEER JSON Users
var localJson = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
function registerUser(req, res) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        console.log(req.body);
        // const valores = req.body;
        // const validaciones = errors.array();
        // res.render("register", { validaciones: validaciones, valores: valores });
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
        // 
    }
    else {
        res.send("pepe");
    }
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password, array = _a.array;
    var users = localJson();
    var user = new users_1.User(name, email, password, []);
    users.push(user);
    fs.writeFileSync("./db/users.json", JSON.stringify(users));
    res.send(users);
}
exports.registerUser = registerUser;
