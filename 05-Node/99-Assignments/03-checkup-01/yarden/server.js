var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
//route
var studentsRoute = require('./routes/studentsRoute');
var beachesRoute = require('./routes/routeBeaches');
var drinksRoute = require('./routes/routeDrinks');
app.use('/beaches', beachesRoute);
app.use('/drinks', drinksRoute);
app.use('/students', studentsRoute);
//route
app.listen(port, function () { return console.log('Server listen on port', port); });
