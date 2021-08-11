const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.static('public'));

//I use this to read the cookie (I can create it with out this)
app.use(cookieParser());

//Route
const registerRoute = require('./routes/routeUsers');
const surveysRoute = require('./routes/routeSurveys');

app.use('/register', registerRoute);
app.use('/surveys', surveysRoute);

app.listen(port, () => { console.log(`Listening on port: ${port}`) });