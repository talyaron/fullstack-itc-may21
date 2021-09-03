var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));
var userRoute = require('./routes/userRoute');
app.use('/users', userRoute);
app.listen(port, function () { return console.log('Server listen on port', port); });
