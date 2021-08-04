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
var port = process.env.PORT || 3000; //Uuidv4 is to generate a new ID

var _require = require('uuid'),
    uuidv4 = _require.v4;

uuidv4();
app.use(express.json());
app.use(express["static"]('public')); //This function is to listen to the port

app.listen(port, function () {
  try {
    console.log("The server is running at port:".concat(port));
  } catch (error) {
    res.status(500).send(error);
  }
});