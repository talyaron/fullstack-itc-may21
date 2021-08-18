var express = require('express'); //get library
var app = express(); //get express
var port = process.env.PORT || 3000; //port
var cookieParser = require('cookie-parser');
var jwt = require('jwt-simple');
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json()); //use express to get parse json
//route
var userRoute = require('./routes/userRoute');
app.use('/user', userRoute);
var secertsRoute = require('./routes/secretsRoute');
app.use('/secrets', secertsRoute);
app.listen(port, function () {
    console.log("server listening at port: " + port);
});
