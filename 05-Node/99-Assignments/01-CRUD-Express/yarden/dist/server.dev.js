"use strict";

var express = require('express');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var Joi = require('joi');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));
var tasksOnServer = []; // GET (CRUD:READ) tasks

app.get('/getAllTasks', function (req, res) {
  try {
    res.send(tasksOnServer);
  } catch (er) {
    console.error(er);
  }
});
app.get('/tasks/:id', function (req, res) {
  res.send(tasksOnServer);
}); // POST (CRUD:Create) tasks
// PUT (CRUD:Update) tasks
// DELETE (CRUD:Delete) tasks
//Listen on port:

app.listen(port, function () {
  console.log("Server listening on port ".concat(port, "..."));
});