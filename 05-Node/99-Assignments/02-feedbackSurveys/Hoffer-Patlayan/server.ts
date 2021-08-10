const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");
// const { v4: uuidv4 } = require("uuid");
// import { v4 as uuidv4 } from 'uuid';
export const localJson = () => {
    const fileJson = fs.readFileSync("./users.json");
    return JSON.parse(fileJson);
  };


app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.set("port", 3500 || process.env.PORT);

// ROUTES FILES IMPORTS
const usersRoute = require('./routes/usersRoutes');
const signUpRoute = require('./routes/signUpRoutes');
const logInRoute = require('./routes/logInRoutes');

// ROUTES
app.use('/users', usersRoute);
app.use('/signUp', signUpRoute);
app.use('/logIn', logInRoute);


app.listen(app.get("port"), () => {
    console.log(`app listening at http://localhost:${app.get("port")}`);
  });