export {};

import { User } from "../models/users";
const fs = require("fs");

//Function to read the JSON of created users
export const readJson = () => {
  try {
    const users = fs.readFileSync("./users.json");
    return JSON.parse(users);
  } catch (error) {
    console.error(error);
  }
};

//Function to add a new user into the JSON
export function newUser(req, res) {
  const user = new User(req.body.username, req.body.email, req.body.password);
  const allUsers = readJson();
  allUsers.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsers));
  res.send({ message: "A new User was added", user: user });
}

//Function to login the user
export function login(req, res) {
  const { email, password } = req.body;
  const allUsers = readJson();
  const userExist = allUsers.find((user) => user.email === email && user.password === password);
  if (userExist) {
    const { username } = userExist;
    const userCookie = JSON.stringify({ username: username, email: email});
    res.cookie("cookieName", userCookie, { maxAge: 300000000, httpOnly: true });
    res.send({ userInfo: username });
  } else {
    res.send({
      message: "Username or password are wrong, try again!",
      userInfo: null,
    });
  }
}
