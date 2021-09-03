var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var cookieParser = require('cookie-parser');
var fs = require("fs");
var morgan = require('morgan');
// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(express.static('public'));
// IMPORT ROUTES FILES
var bookRoute = require('./routes/bookRoutes');
// ROUTES
app.use('/book', bookRoute);
app.listen(port, function () { console.log('listen on 5000'); });
