"use strict";

var path = require('path'); // const filePath = path.resolve(__dirname, './survey.json')


var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

function addSurvey(newSurvey) {
  console.log("hello surbey ");
  var allSurveys = getAllSurveys();
  console.log("hello surbey 3 "); // const task = {
  //     title,
  //     id: uuidv4()
  // }

  allSurveys.push(newSurvey);
  fs.writeFileSync("./survey.json", JSON.stringify(allSurveys));
  return allSurveys;
}

function getAllSurveys() {
  console.log('indie get all survey ');
  var allSurveys = fs.readFileSync("./survey.json");
  console.log('indie get after read y ');
  var parsed = JSON.parse(allSurveys);
  return parsed;
}

exports.addSurvey = addSurvey; //splice routes and models for each .json (one for surveys and other for questions)
// function addQuestion(title) { 
//     const allTasks = getAllTasks();
//     const task = {
//         title,
//         id: uuidv4()
//     }
//     allTasks.push(task);
//     fs.writeFileSync(filePath, JSON.stringify(allTasks));
//     return allTasks
// }
// function deleteSurvey(id) { 
//     const allTasks = getAllTasks();
//     const filteredTasks = allTasks.filter(task => task.id !== id)
//     fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
//     return filteredTasks
// }
// function deleteQuestion(id) { 
//     const allTasks = getAllTasks();
//     const filteredTasks = allTasks.filter(task => task.id !== id)
//     fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
//     return filteredTasks
// }
// function editQuestion(id, newTitle) { 
//     console.log("inside model");
//     const allTasks = getAllTasks();
//     const taskToEdit = allTasks.filter(task => task.id === id); 
//     taskToEdit[0].title = newTitle;
//     console.log(taskToEdit)
//     fs.writeFileSync(filePath, JSON.stringify(allTasks));
//     return allTasks
// }
// function editSurvey(id, newTitle) { 
//     console.log("inside model");
//     const allTasks = getAllTasks();
//     const taskToEdit = allTasks.filter(task => task.id === id); 
//     taskToEdit[0].title = newTitle;
//     console.log(taskToEdit)
//     fs.writeFileSync(filePath, JSON.stringify(allTasks));
//     return allTasks
// }
// exports.getAllSurveys = getAllSurveys
// exports.deleteSurvey = deleteSurvey
// exports.editSurvey = editSurvey 
// exports.addQuestion = addQuestion
// exports.editQuestion = editQuestion
// exports.deleteQuestion = deleteQuestion