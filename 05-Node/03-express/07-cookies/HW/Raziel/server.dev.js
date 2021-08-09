"use strict";

var express = require('express');

var app = express();

var fs = require('fs');

var port = process.env["const"] || 3000; // const cookieParser = require("cookie-parser");
// app.use(cookieParser());
// app.use(express.json());

app.use(express["static"]('public')); // function readUserData(){
//     const userData = fs.readFileSync("./userData.json");
//     return JSON.parse(userData);
// }
// app.post("/signUp", (req, res) => {
//     const { name,password } = req.body;
//     const users = readUserData();
//     const addUser = {
//       name: name,
//       password: password,
//     };
//     users.push(addUser);
//     fs.writeFileSync("./userData.json", JSON.stringify(users));
//     res.send(users);
//   });

app.listen(port, function () {
  console.log('Server listen on port', port);
});