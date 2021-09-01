var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');
var uuidv4 = require("uuid").v4;
var path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(cookieParser());
//the routes 
var userRoute = require('./routes/userRoute');
var productRoute = require('./routes/productRoute');
//use of the routes 
app.use('/user', userRoute);
app.use('/product', productRoute);
app.listen(port, function () { console.log("app listen to port," + port); });
