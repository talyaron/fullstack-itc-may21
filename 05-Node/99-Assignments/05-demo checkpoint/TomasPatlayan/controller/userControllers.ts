export {};
import { readUsers, User, Users } from "../model/userModel";
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
import {secret} from '../secret/secret'

app.use(express.json())
app.use(cookieParser());
export const registerUser = (req, res) => {
  const { name, color, image } = req.body;
  const newUser = new User(name, color, image);
  const allUsers = new Users();
  allUsers.createUser(newUser);
  const users = readUsers();

  const findUser = users.find(
    (elements) =>
      elements.name === req.body.name && elements.color === req.body.color
  );
  const token = jwt.sign(findUser,secret)
res.cookie("cookieName",JSON.stringify(token),{maxAge:101011010, httpOnly:true})

  res.send({ message: "A new user has been register", allUsers });
};

export const getAllUser = (req, res) => {
  const allUsers = new Users();
  console.log(allUsers);

  res.send({ message: "Geting all user Information", allUsers });
};
