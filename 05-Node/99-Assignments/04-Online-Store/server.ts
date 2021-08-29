const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const bodyParser = require("body-parser");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"));

app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const secret:string = process.env.SECRET || 'secret 123'
console.log(secret);


const userRoute = require("./routes/userRoute");
app.use("/user", userRoute);

const productRoute = require("./routes/productRoute");
app.use("/product", productRoute);

app.listen(port, () => {
  console.log("listening on port", port);
});
