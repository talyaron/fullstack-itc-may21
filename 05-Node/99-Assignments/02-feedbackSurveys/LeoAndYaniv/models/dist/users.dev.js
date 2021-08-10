"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;

var fs = require('fs');

var readJson = function readJson() {
  try {
    var _users = fs.readFileSync('../users.json');

    return JSON.parse(_users);
  } catch (error) {
    console.error(error);
  }
};

var users = readJson();
exports.users = users;