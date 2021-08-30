var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
//route
var beachesRoute = require('./routes/routeBeaches');
var drinksRoute = require('./routes/routeDrinks');
app.use('/beaches', beachesRoute);
app.use('/drinks', drinksRoute);
//route
app.listen(port, function () { return console.log('Server listen on port', port); });
