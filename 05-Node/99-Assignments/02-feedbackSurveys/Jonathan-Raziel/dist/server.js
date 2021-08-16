var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
var userModel = require("./routes/routeUser"); //YS: Should be called userRoute
//YS: This is not how we use routes - you should only have 1 route with 1 file. You are using many different routes for the same file.  
app.use('/register', userModel);
app.use('/loginUser', userModel);
app.use('/login', userModel);
app.use('/cookie', userModel);
app.use('/surveys', userModel);
app.use('/score', userModel);
var surveyModel = require("./routes/routesSurveys"); //YS: Should be called surveyRoute
app.use('/surveys', surveyModel);
app.use('/id', surveyModel);
app.use('/id', surveyModel);
app.use('/previous', surveyModel);
// app.use('/c', surveyModel)
app.use('/delete', surveyModel);
app.listen(8000, function () { console.log('Listen on 8000'); });
