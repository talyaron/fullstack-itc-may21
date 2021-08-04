var express = require('express');
var router = express.Router();
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var beachesRoute = require('./routes/beaches/dist/routeBeaches');
var drinksRoute = require('./routes/drinks/dist/routeDrinks');
app.listen(port, function () { return console.log('Server listen on port', port); });
module.exports = router;
