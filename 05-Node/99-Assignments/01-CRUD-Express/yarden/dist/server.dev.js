"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* List Ninja server file
This app has CRUD features using a Task class

*/
var express = require('express');

var Joi = require('joi');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));

var Task =
/*#__PURE__*/
function () {
  function Task(text) {
    _classCallCheck(this, Task);

    this.text = text;
    this.id = Math.random().toString(16).slice(2);
    this.isDone = false;
  }

  _createClass(Task, [{
    key: "update",
    value: function update(newTask) {
      this.text = newTask.text;
    }
  }]);

  return Task;
}(); // The array to keep the tasks on the server:


var tasksOnServer = []; // Two tasks to have some content on start:

tasksOnServer.push(new Task("Call the bank"));
tasksOnServer.push(new Task("Take out the trash")); // GET (CRUD:READ) all tasks

app.get('/tasks', function (req, res) {
  res.send(tasksOnServer);
}); // POST (CRUD:Create) tasks

app.post('/tasks', function (req, res) {
  console.log(req.body);
  var text = req.body.text;
  var task = new Task(text);
  tasksOnServer.push(task);
  console.log('Posted!', tasksOnServer);
  res.send(task);
}); // PUT (CRUD:Update) tasks

app.put('/tasks', function (req, res) {
  var task = req.body.task;
  console.log(task.text);
  var index = tasksOnServer.findIndex(function (t) {
    return t.id === task.id;
  });

  if (index === -1) {
    res.status(404);
    res.send("Task not found.");
    return;
  }

  tasksOnServer[index].text = task.text;
  tasksOnServer[index].isDone = task.isDone;
  res.send(tasksOnServer[index]);
}); // DELETE (CRUD:Delete) tasks

app["delete"]('/tasks/:id', function (req, res) {
  var id = req.params.id;
  var taskIndex = tasksOnServer.findIndex(function (task) {
    return task.id === id;
  });
  tasksOnServer.splice(taskIndex, 1);
  res.send(tasksOnServer);
}); // Listen on port:

app.listen(port, function () {
  console.log("Server listening on port ".concat(port, "..."));
});