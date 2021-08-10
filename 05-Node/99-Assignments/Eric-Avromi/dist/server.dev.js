"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

var fs = require("fs"); //do  the same to questions .json?


app.use(express["static"]("public"));
app.use(express.json()); // const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)

var _require = require('./models/userModels.js'),
    addUsers = _require.addUsers;

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.post('/register', function (req, res) {
  //class info from the form, create a new user like an instance
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password;
  var newUser = new User(name, email, password);
  addUsers(newUser);
  res.cookie('cookie', {
    maxAge: 30000000,
    httpOnly: true
  }).send({
    ok: true
  });
});
app.get('/useAdmin', function (req, res) {
  var cookie = req.cookies['cookie'];
  res.send({
    cookie: cookie
  });
});

var surveyRouter = require('./routes/surveyRoute.js');

var _require2 = require('uuid'),
    uuidv4 = _require2.v4; // do  the same to questions?


var User = function User(name, email, password) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.id = uuidv4();
  this.createdSurvey = []; //this will get survey Id..
}; // class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }


app.use('/survey', surveyRouter); //do the same for questionRouter?

app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});