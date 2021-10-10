var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static('public'));
var publicUsersRoute = require('./routes/publicUsersRoute');
var adminUserRoute = require('./routes/adminUserRoute');
var loginRoute = require('./routes/loginRoute');
var cartRoute = require('./routes/cartRoute');


app.use('/publicUsers', publicUsersRoute);
app.use('/adminUsers', adminUserRoute);
app.use('/login', loginRoute);
app.use('/cart', cartRoute);



app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
