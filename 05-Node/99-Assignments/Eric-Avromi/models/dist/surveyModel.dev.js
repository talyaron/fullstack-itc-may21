"use strict";

var path = require('path');

var filePath = path.resolve(__dirname, 'survey.json');

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4; //splice routes and models for each .json (one for surveys and other for questions)


function getAllSurveys() {
  var allTasks = fs.readFileSync(filePath);
  console.log(allTasks);
  var parsed = JSON.parse(allTasks);
  return parsed;
}

function addSurvey(title) {
  var allTasks = getAllTasks();
  var task = {
    title: title,
    id: uuidv4()
  };
  allTasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(allTasks));
  return allTasks;
}

function addQuestion(title) {
  var allTasks = getAllTasks();
  var task = {
    title: title,
    id: uuidv4()
  };
  allTasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(allTasks));
  return allTasks;
}

function deleteSurvey(id) {
  var allTasks = getAllTasks();
  var filteredTasks = allTasks.filter(function (task) {
    return task.id !== id;
  });
  fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
  return filteredTasks;
}

function deleteQuestion(id) {
  var allTasks = getAllTasks();
  var filteredTasks = allTasks.filter(function (task) {
    return task.id !== id;
  });
  fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
  return filteredTasks;
}

function editQuestion(id, newTitle) {
  console.log("inside model");
  var allTasks = getAllTasks();
  var taskToEdit = allTasks.filter(function (task) {
    return task.id === id;
  });
  taskToEdit[0].title = newTitle;
  console.log(taskToEdit);
  fs.writeFileSync(filePath, JSON.stringify(allTasks));
  return allTasks;
}

function editSurvey(id, newTitle) {
  console.log("inside model");
  var allTasks = getAllTasks();
  var taskToEdit = allTasks.filter(function (task) {
    return task.id === id;
  });
  taskToEdit[0].title = newTitle;
  console.log(taskToEdit);
  fs.writeFileSync(filePath, JSON.stringify(allTasks));
  return allTasks;
}

exports.getAllSurveys = getAllSurveys;
exports.addSurvey = addSurvey;
exports.deleteSurvey = deleteSurvey;
exports.editSurvey = editSurvey;
exports.addQuestion = addQuestion;
exports.editQuestion = editQuestion;
exports.deleteQuestion = deleteQuestion;