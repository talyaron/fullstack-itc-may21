var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require("cookie-parser");
var uuidv4 = require("uuid").v4;
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
// ROUTES FILES IMPORTS
var usersRoute = require('./routes/usersRoutes');
var signUpRoute = require('./routes/signUpRoutes');
var logInRoute = require('./routes/logInRoutes');
// ROUTES
app.use('/users', usersRoute);
app.use('/signUp', signUpRoute);
app.use('/logIn', logInRoute);
app.listen(3500, function () { console.log('listen on 3500'); });
