export {};

import { User, Users } from "../models/users";

const fs = require("fs");
const path = require('path');
const surveysJsonPath = path.resolve(__dirname, '../models/surveys.json');

//Function to add a new user into the JSON
export function newUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = new User(username, email, password);
    const allUsers = new Users;
    const userCreated: boolean = allUsers.createUser(user);
    if (!userCreated) {
      res.send({ message: "A new User was added", user });  
    } else {
      res.send({ message: "Email already registered, please try a different email address!" });
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
    const allUsers = new Users;
    const username = allUsers.loginUser(email, password);
    if (username) {
      res.send({ message: "Logged in successfully", username });
    } else {
      res.send({ message: "Username or password are wrong, please try again!" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to read the JSON of created surveys
const readJsonSurveys = () => {
  try {
    const surveys = fs.readFileSync(surveysJsonPath);
    return JSON.parse(surveys);
  } catch (error) {
    console.error(error);
  }
};

//Function to add new survey uuid to user
export function uploadSurvey(req, res) {
  try {
    const { uuid } = req.params; // survey uuid
    let allSurveys = readJsonSurveys();
    const newSurvey = allSurveys.find((survey) => survey.uuid === uuid);
    newSurvey.title = req.body.surveyTitle;

    let allUsers = new Users;
    allUsers.addCreatedSurvey(req.email, newSurvey.uuid);
    res.send({ message: "Amazing! You created a survey properly", userInfo: req.email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}