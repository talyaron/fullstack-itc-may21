"use strict";

var express = require('express');

var cookieParser = require('cookie-parser'); // Import routes


var loginRoute = require('./routes/loginRoute');

var questionsRoute = require('./routes/questionsRoute');

var surveysRoute = require('./routes/surveysRoute');

var usersRoute = require('./routes/usersRoute');

var adminRoute = require('./routes/adminRoute');

var votesRoutes = require('./routes/votesRoute');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser()); // Routes

app.use('/login', loginRoute);
app.use('/questions', questionsRoute);
app.use('/surveys', surveysRoute);
app.use('/users', usersRoute);
app.use('/admin', adminRoute);
app.use('/votes', votesRoutes);
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});