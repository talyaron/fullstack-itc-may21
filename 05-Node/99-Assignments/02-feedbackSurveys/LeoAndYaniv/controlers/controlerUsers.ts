export {};

import { User } from "../models/users";
import { Survey } from "../models/surveys";
const fs = require("fs");

//Function to read the JSON of created users
export const readJsonUsers = () => {
  try {
    const users = fs.readFileSync("./users.json");
    return JSON.parse(users);
  } catch (error) {
    console.error(error);
  }
};

//Function to read the JSON of created surveys
export const readJsonSurveys = () => {
  try {
    const surveys = fs.readFileSync("./surveys.json");
    return JSON.parse(surveys);
  } catch (error) {
    console.error(error);
  }
};

//Function to add a new user into the JSON
export function newUser(req, res) {
  const user = new User(req.body.username, req.body.email, req.body.password);
  const allUsers = readJsonUsers();
  allUsers.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsers));
  const { username, email } = user;
  const userCookie = JSON.stringify({ username: username, email: email });
  res.cookie("cookieName", userCookie, { maxAge: 300000000, httpOnly: true });
  res.send({ message: "A new User was added", user: user });
}

//Function to login the user
export function login(req, res) {
  const { email, password } = req.body;
  const allUsers = readJsonUsers();
  const userExist = allUsers.find(
    (user) => user.email === email && user.password === password
  );
  if (userExist) {
    const { username } = userExist;
    const userCookie = JSON.stringify({ username: username, email: email });
    res.cookie("cookieName", userCookie, { maxAge: 300000000, httpOnly: true });
    res.send({ userInfo: username });
  } else {
    res.send({
      message: "Username or password are wrong, try again!",
      userInfo: null,
    });
  }
}

//Function to get the information from the cookie
export function getInfo(req, res) {
  try {
    //Read cookies
    const { cookieName } = req.cookies;
    const cookie = JSON.parse(cookieName);

    res.send({ cookie });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//Function to get the information from the cookie
export function uploadSurvey(req, res) {
  try {
    const { uuid } = req.params;
    let allSurveys = readJsonSurveys();
    const surveyExist = allSurveys.find((survey) => survey.uuid === uuid);
    surveyExist.title = req.body.surveyTitle;

    //Read cookies to find the user
    const { cookieName } = req.cookies;
    const cookie = JSON.parse(cookieName);
    let allUsers = readJsonUsers();
    const userExist = allUsers.find((user) => user.email === cookie.email);
    //I pushed the UUID of the surevey that I just finished to the user that is login
    userExist.createdSurveys.push(surveyExist.uuid);
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
    res.send({ message: "Amazing! You created a survey propertly", userInfo: cookie.email });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
