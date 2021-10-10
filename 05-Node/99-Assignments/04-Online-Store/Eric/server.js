var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.json());
var cookieParser = require("cookie-parser");
app.use(cookieParser());
var bodyParser = require("body-parser");
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
var secret = process.env.SECRET || 'secret 123';
console.log(secret);
var userRoute = require("./routes/userRoute");
app.use("/user", userRoute);
var productRoute = require("./routes/productRoute");
app.use("/product", productRoute);
app.listen(port, function () {
    console.log("listening on port", port);
});