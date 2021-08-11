"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

var fs = require("fs"); //do  the same to answers and surveys .json?


app.use(express["static"]("public"));
app.use(express.json()); // const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)

var addUserr = require('./models/userModels');

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
  res.cookie('cookie', JSON.stringify(newUser), {
    maxAge: 30000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.post('/login', function (req, res) {
  //class info from the form, create a new user like an instance
  var _req$body2 = req.body,
      name = _req$body2.name,
      email = _req$body2.email,
      password = _req$body2.password;
  var user = new User(name, email, password);
  addUsers(user);
  res.cookie('cookie', {
    maxAge: 30000000,
    httpOnly: true
  }).send({
    ok: true
  });
}); // app.get('/useAdmin', (req, res) => {
//     const cookie = req.cookies['cookie'];
//     res.send({cookie})
// })

var surveyRouter = require('./routes/surveyRoute.js');

var _require = require('uuid'),
    uuidv4 = _require.v4; // do  the same to questions?


app.use('/pepe', surveyRouter);
a;
app.use('/survey', surveyRouter); //do the same for questionRouter?

app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});