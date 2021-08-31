var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
//route
var beachesRoute = require('./routes/routeBeaches');
var drinksRoute = require('./routes/routeDrinks');
app.use('/beaches', beachesRoute);
app.use('/drinks', drinksRoute);
//route
var studentRoute = require('./routes/routeStudent');
app.use('/student', studentRoute);
app.listen(port, function () { return console.log('Server listen on port', port); });
