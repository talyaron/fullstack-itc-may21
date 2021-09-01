var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var cookieParser = require("cookie-parser");
app.set("port", 8080 || process.env.PORT);
app.use(express.json());
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var userRoutes = require('./routes/userRoutes');
var productRoutes = require('./routes/productRoutes');
var cartRoutes = require('./routes/cartRoute');
app.use('/user', userRoutes);
app.use('/product', productRoutes, cartRoutes);
app.listen(app.get("port"), function () {
    console.log("app listening on http://localhost:" + app.get("port"));
});
