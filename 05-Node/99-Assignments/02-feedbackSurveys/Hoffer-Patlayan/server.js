"use strict";
exports.__esModule = true;
exports.localJson = void 0;
var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require("cookie-parser");
// const { v4: uuidv4 } = require("uuid");
var localJson = function () {
    var fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
};
exports.localJson = localJson;
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.set("port", 3500 || process.env.PORT);
// ROUTES FILES IMPORTS
var usersRoute = require('./routes/usersRoutes');
var signUpRoute = require('./routes/signUpRoutes');
var logInRoute = require('./routes/logInRoutes');
// ROUTES
app.use('/users', usersRoute);
app.use('/signUp', signUpRoute);
app.use('/logIn', logInRoute);
app.listen(app.get("port"), function () {
    console.log("app listening at http://localhost:" + app.get("port"));
});
