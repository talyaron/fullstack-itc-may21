var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));
//route
var studnetsRoute = require('./routes/studentsRoute');
app.use('/students', studnetsRoute);
//route
app.listen(port, function () { return console.log('Server listen on port', port); });
