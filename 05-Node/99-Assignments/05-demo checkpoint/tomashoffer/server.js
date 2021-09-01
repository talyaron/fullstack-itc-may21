var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var cookieParser = require('cookie-parser');
var fs = require("fs");
// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
// app.use(morgan('tiny'));
app.use(express.static('public'));
// IMPORT ROUTES FILES
var userRoute = require('./routes/userRoutes');
// ROUTES
app.use('/user', userRoute);
app.listen(port, function () { console.log('listen on 4000'); });
