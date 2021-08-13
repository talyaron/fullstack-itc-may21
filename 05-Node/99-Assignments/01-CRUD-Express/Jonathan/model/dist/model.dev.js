"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readAllTasks = void 0;

var readAllTasks = function readAllTasks() {
  var allTasks = fs.readFileSync("./task.json");
  return JSON.parse(allTasks);
};

exports.readAllTasks = readAllTasks;