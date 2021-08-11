var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
var userModel = require("./routes/routeUser");
var userLogin = require("./routes/routeUser");
var getCookie = require("./routes/routeUser");
var getSurveys = require("./routes/routeUser");
var addSurveys = require("./routes/routesSurveys");
//const deleteSurveys = require("./routes/routesSurveys")
var getUniqueId = require("./routes/routesSurveys");
var getPrevios = require("./routes/routesSurveys");
app.use('/register', userModel);
app.use('/login', userLogin);
app.use('/cookie', getCookie);
app.use('/surveys', getSurveys);
app.use('/surveys', addSurveys);
app.use('/id', getUniqueId);
app.use('/r', getPrevios);
//app.use('/delete',deleteSurveys)
app.listen(8000, function () { console.log('Listen on 8000'); });
//https://stackoverflow.com/questions/41228221/can-you-export-multiple-classes-from-a-single-nodejs-module
