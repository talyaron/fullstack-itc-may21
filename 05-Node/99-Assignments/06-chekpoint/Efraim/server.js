var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static('public'));
var bookRoute = require('./routes/bookRoute');
app.use('/books', bookRoute);
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
