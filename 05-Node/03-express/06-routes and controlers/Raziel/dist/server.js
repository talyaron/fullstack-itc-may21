var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var routeClassAA = require('./routes/routeClassA');
app.use('/students', routeClassAA);
app.listen(port, function () { return console.log('Server listen on port', port); });
