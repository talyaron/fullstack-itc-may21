const express = require("express");
const app = express();
const fs = require("fs");
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.json());
// app.use(express.static('public'));

const userRoutes = require("./routes/userRoutes")

app.use('/register', userRoutes);
app.use('/loginUser', userRoutes);
app.use('/login', userRoutes);
app.use('/cookie', userRoutes);
app.use('/surveys', userRoutes);
app.use('/score',userRoutes)

const surveyRoutes = require("./routes/surveyRoutes")

app.use('/surveys',surveyRoutes);
app.use('/id',surveyRoutes);
app.use('/id',surveyRoutes);
app.use('/previous',surveyRoutes);
app.use('/delete',surveyRoutes);

app.listen(8080, function () { console.log('Listen on 8080'); });

