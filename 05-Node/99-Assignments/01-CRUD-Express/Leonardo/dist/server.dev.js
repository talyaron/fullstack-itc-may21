"use strict";

/* You should have a list of tasks
create a task
update a task (done/not done/ update text)
delete a task

make it responsive, and look and feel of KEEP

//optional
order tasks
 */
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require("fs"); //Uuidv4 is to generate a new ID


var _require = require('uuid'),
    uuidv4 = _require.v4;

uuidv4(); //Joi is to validate the data I enter:

var Joi = require("joi");

app.use(express.json());
app.use(express["static"]('public')); //This function is to read the array (I create this so the information will be kept even if I turn off the server)

function readJsonAllTasks() {
  var tasksList = fs.readFileSync("./allTasks.json");
  return JSON.parse(tasksList);
} //Route to create a Task


app.post('/createTask', function (req, res) {
  var body = req.body;
  var schema = Joi.object({
    taskTitle: Joi.string().max(40).required(),
    taskDescription: Joi.string().max(200).required()
  });

  var _schema$validate = schema.validate({
    taskTitle: body.taskTitle,
    taskDescription: body.taskDescription
  }),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (!error) {
    var task = {
      id: uuidv4(),
      dateCreated: Date.now(),
      title: value.taskTitle,
      description: value.taskDescription,
      status: 'toDo'
    };
    var allTasks = readJsonAllTasks();
    allTasks.push(task);
    fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
    res.send({
      message: 'A new Task was added',
      tasks: allTasks
    });
  } else {
    var msg = error.details[0].message;
    res.status(400).send(msg);
  }
}); //Route to get all the Tasks

app.get('/getAllTasks', function (req, res) {
  var allTasks = readJsonAllTasks();
  res.send(allTasks);
}); //Route to delete a Task

app["delete"]('/deleteTask/:id', function (req, res) {
  try {
    var id = req.params.id;
    var allTasks = readJsonAllTasks();
    allTasks = allTasks.filter(function (task) {
      return task.id !== id;
    });
    fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
    res.send({
      message: 'A task was deleted',
      tasks: allTasks
    });
  } catch (e) {
    res.status(400).send(error);
  }
}); //Route to update a Task

app.put('/editTask/:id', function (req, res) {
  try {
    var _req$body = req.body,
        taskTitle = _req$body.taskTitle,
        taskDescription = _req$body.taskDescription,
        taskStatus = _req$body.taskStatus;
    var id = req.params.id;
    var allTasks = readJsonAllTasks();
    var taskIndex = allTasks.findIndex(function (task) {
      return task.id === id;
    });

    if (taskIndex > -1) {
      allTasks[taskIndex].title = taskTitle;
      allTasks[taskIndex].description = taskDescription;
      allTasks[taskIndex].status = taskStatus;
      fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
      res.send({
        message: 'A task was updated',
        tasks: allTasks
      });
    } else {
      res.send({
        message: 'Couldnt find a task to update',
        tasks: allTasks
      });
    }
  } catch (e) {
    res.status(400).send(error);
  }
}); //This function is to listen to the port

app.listen(port, function () {
  try {
    console.log("The server is running at port:".concat(port));
  } catch (error) {
    res.status(500).send(error);
  }
});