"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allUsers = allUsers;

var _users = require("../models/users");

function allUsers(req, res) {
  res.send(_users.users);
}
/* export function firstBeach (req, res) {
    res.send(beaches[0]);
}; */