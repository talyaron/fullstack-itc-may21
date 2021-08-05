"use strict";

var path = require('path');

var filePath = path.resolve(__dirname, 'tasks.json');

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

function getAllTasks() {
  var allTasks = fs.readFileSync(filePath);
  console.log(allTasks);
  var parsed = JSON.parse(allTasks);
  return parsed;
}

exports.getAllTasks = getAllTasks;

function addTask(title) {
  var allTasks = getAllTasks();
  var task = {
    title: title,
    id: uuidv4()
  };
  allTasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(allTasks));
  return allTasks;
}

exports.addTask = addTask;