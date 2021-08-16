"use strict";
exports.__esModule = true;
exports.addvoter = void 0;
var voter_1 = require("../models/voter");
var fs = require("fs");
var userJson = function () {
    var fileJson = fs.readFileSync("./db/voters.json");
    return JSON.parse(fileJson);
};
exports.addvoter = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email;
    var voters = userJson();
    var voter = new voter_1.Voter(name, email);
    voters.push(voter);
    fs.writeFileSync("./db/voters.json", JSON.stringify(voters));
    res.send(voters);
};
