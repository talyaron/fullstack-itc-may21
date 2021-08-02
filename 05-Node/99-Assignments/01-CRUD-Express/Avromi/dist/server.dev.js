"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));

var _require = require('uuid'),
    uuidv4 = _require.v4;

uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

var Task = function Task(title) {
  _classCallCheck(this, Task);

  this.title = title;
  this.id = uuidv4();
};

var tasks = [];
app.post('/newTask', function (req, res) {
  console.log(req.bosy);
  var title = req.body.title;
  var task = new Task(title);
  res.send(task);
});
app.listen(port, function () {
  console.log("App Listening on port: ".concat(port));
});