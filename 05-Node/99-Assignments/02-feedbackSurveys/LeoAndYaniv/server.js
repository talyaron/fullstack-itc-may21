const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const path = require('path');
const pathToPublicFolder  = path.resolve(__dirname, "./public")
app.use(express.json());
app.use(express.static(pathToPublicFolder));

//I use this to read a cookie (I can create it with out this)
app.use(cookieParser());

//Route (I import the routes of users and surveys)
const userRoute = require('./routes/routeUsers');
const surveysRoute = require('./routes/routeSurveys');

//Use of that Routes that I imported
app.use('/user', userRoute);
app.use('/surveys', surveysRoute);

app.listen(port, () => { console.log(`Listening on port: ${port}`) });