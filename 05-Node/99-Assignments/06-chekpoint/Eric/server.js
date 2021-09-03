var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var fs = require("fs");
// const cookieParser = require("cookie-parser")
// app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'));
var bookRoutes = require('./routes/bookRoute');
app.use('/book', bookRoutes);
app.listen(port, function () { return console.log('Server listen on port', port); });
