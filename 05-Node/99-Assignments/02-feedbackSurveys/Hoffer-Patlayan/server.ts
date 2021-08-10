const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

// ROUTES FILES IMPORTS
const usersRoute = require('./routes/usersRoutes');
const signUpRoute = require('./routes/signUpRoutes');
const logInRoute = require('./routes/logInRoutes');

// ROUTES
app.use('/users', usersRoute);
app.use('/signUp', signUpRoute);
app.use('/logIn', logInRoute);


app.listen(3500, ()=>{console.log('listen on 3500')})