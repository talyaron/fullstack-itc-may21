"use strict";

/* create server-client app

in the server create an array of students (preferbly with a clouser)  

in the client, the user can add a student information ({name, age, id, avarage_grade})
the client send the added student information to the server. the server store the information on the array.

the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
the results will be showen on the DOM
 */
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.listen(port, function () {
  console.log("The server is running at port:".concat(port));
});