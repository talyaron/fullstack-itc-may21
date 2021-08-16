const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'));

const userModel = require("./routes/routeUser")

app.use('/register', userModel);
app.use('/loginUser', userModel);
app.use('/login', userModel);
app.use('/cookie', userModel);
app.use('/surveys', userModel);
app.use('/score',userModel)

const surveyModel = require("./routes/routesSurveys")

app.use('/surveys',surveyModel)
app.use('/id',surveyModel)
app.use('/id',surveyModel)
app.use('/previous',surveyModel)
// app.use('/c', surveyModel)
app.use('/delete',surveyModel)




app.listen(8000, function () { console.log('Listen on 8000'); });

