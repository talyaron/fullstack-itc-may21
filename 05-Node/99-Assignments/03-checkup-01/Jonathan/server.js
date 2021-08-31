var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));
var studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);
app.listen(port, function () { return console.log('Server listen on port', port); });
