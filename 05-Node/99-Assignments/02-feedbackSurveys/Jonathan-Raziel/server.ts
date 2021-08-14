const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'));

const userModel = require("./routes/routeUser")
const userLogin = require("./routes/routeUser")
const getCookie = require("./routes/routeUser")
const getSurveys = require("./routes/routeUser")
const endUserLogin= require("./routes/routeUser")
const addSurveys = require("./routes/routesSurveys")
const deleteSurveys = require("./routes/routesSurveys")
const getUniqueId = require("./routes/routesSurveys")
const getPrevios = require("./routes/routesSurveys")

const editSurveys = require("./routes/routesSurveys")


app.use('/register', userModel);
app.use('/login', userLogin);
app.use('/login', endUserLogin);
app.use('/cookie', getCookie);
app.use('/surveys', getSurveys);

app.use('/surveys',addSurveys)
app.use('/id',getUniqueId)
app.use('/r',getPrevios)
app.use('/c', editSurveys)

app.use('/delete',deleteSurveys)


app.listen(8000, function () { console.log('Listen on 8000'); });

//https://stackoverflow.com/questions/41228221/can-you-export-multiple-classes-from-a-single-nodejs-module

