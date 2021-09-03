var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());
var userRoute = require('./routes/userRoute');
app.use('/users', userRoute);
app.listen(PORT, function () {
    console.log("App is listening " + PORT);
});
