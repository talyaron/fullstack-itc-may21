var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
//route
var studentsRoute = require('./routes/studentsRoute');
app.use('/students', studentsRoute);
app.listen(port, function () { return console.log('Server listen on port', port); });
