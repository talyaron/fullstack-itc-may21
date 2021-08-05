"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 5500;

var _require = require('uuid'),
    uuidv4 = _require.v4;

var tasks = []; // READ JSON

app.use(express.json()); // READ PUBLIC 

app.use(express["static"]('public')); // GET TASKS

app.get('/tasks', function (req, res) {
  res.send(tasks);
});
app.get('/tasks/:id', function (req, res) {
  res.send(tasks);
}); // POST TASKS

app.post('/tasks', function (req, res) {
  var task = req.body;
  task.id = uuidv4();
  tasks.push(task);
  console.log(tasks);
  res.send(tasks);
}); // DELETE TASKS

app["delete"]('/tasks/:id', function (req, res) {
  var id = req.params.id;
  var deleteTask = tasks.filter(function (task) {
    return task.id !== id;
  });
  tasks = deleteTask;
  res.send(deleteTask);
}); // UPDATE TASKS

app.put('/tasks', function (req, res) {
  var _req$body = req.body,
      task = _req$body.task,
      date = _req$body.date,
      status = _req$body.status,
      id = _req$body.id;
  var taskUpdate = tasks.findIndex(function (task) {
    return task.id === id;
  });
  if (task) tasks[taskUpdate].task = task;
  if (date) tasks[taskUpdate].date = date;
  if (status) tasks[taskUpdate].status = status;
  tasks[taskUpdate].id = id;
  res.send(tasks);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});