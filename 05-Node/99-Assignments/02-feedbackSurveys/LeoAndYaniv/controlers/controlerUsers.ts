export {};

import { User, Users } from "../models/users";
import { Survey, Surveys } from "../models/surveys";

const fs = require("fs");
const path = require("path");
const surveysJsonPath = path.resolve(__dirname, "../models/surveys.json");

//Function to add a new user into the JSON
export function newUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = new User(username, email, password);
    const allUsers = new Users();
    const emailExistsWithPass: boolean = allUsers.createUser(user, null);
    if (!emailExistsWithPass) {
      res.send({ message: "A new User was added", user });
    } else {
      res.send({
        message:
          "Email already registered, please try a different email address!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to login the user
export function login(req, res) {
  try {
    const { email, password } = req.body;
    const allUsers = new Users();
    const userExists = allUsers.loginUser(email, password);
    if (userExists) {
    const { username } = userExists;
    //Set the cookie
    const cookieToWrite: string = JSON.stringify({ username, email });
      res.cookie("userDetails", cookieToWrite, { maxAge: 900000, httpOnly: true });
      res.send({ message: "Logged in successfully", username });
    } else {
      res.send({
        message: "Username or password are wrong, please try again!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function for answer Login JSON
export function answerLogin(req, res) {
  try {
    const { username, email, uuid } = req.body;
    const user = new User(username, email, null);
    const allUsers = new Users();
    const emailExists: boolean = allUsers.createUser(user, uuid);
    if (!emailExists) {
      res.send({ message: "A new User was added", email, username });
    } else {
      res.send({ message: "A new User was added", email, username });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export function sendCookie(req, res) {
  try {
    res.send({ email: req.email, username: req.username });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to read the JSON of created surveys
// const readJsonSurveys = () => {
//   try {
//     const surveys = fs.readFileSync(surveysJsonPath);
//     return JSON.parse(surveys);
//   } catch (error) {
//     console.error(error);
//   }
// };

//Function to add new survey uuid to user
export function uploadSurvey(req, res) {
  try {
    const { uuid } = req.params; // survey uuid
    
    const allSurveys = new Surveys();
    const newSurvey = new Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
    newSurvey.title = req.body.surveyTitle;
    allSurveys.updateSurvey(newSurvey);

    let allUsers = new Users();
    allUsers.addCreatedSurvey(req.email, uuid);

    res.send({
      message: "Amazing! You created a survey properly",
      userDetails: req.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
