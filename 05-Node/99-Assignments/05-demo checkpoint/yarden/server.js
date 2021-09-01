var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
var usersRoute = require('./routes/usersRoute');
app.use('/users', usersRoute);
app.listen(port, function () { return console.log('Server listen on port', port); });
