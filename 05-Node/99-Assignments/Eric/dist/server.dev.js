"use strict";

/*You should have a list of tasks
create a task
update a task (done/not done/ update text)
delete a task

make it responsive, and look and feel of KEEP

//optional
order tasks*/
var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
app.use(express["static"]('public'));
app.use(express.json());

var _require = require('uuid'),
    uuidv4 = _require.v4;

app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});