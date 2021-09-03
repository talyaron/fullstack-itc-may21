import { readUsers, User, Users } from "../models/userModel";
import { secret } from "../secret/secret";
const fs = require("fs");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());
export const createUser = (req, res) => {
  const { name, bookName } = req.body;
  const newUser = new User(name, bookName);
  const allUsers = new Users();
  allUsers.createUser(newUser);
  const users = readUsers();

  const findUser = users.find(
    (elements) =>
      elements.name === req.body.name && elements.bookName === req.body.bookName
  );
  const token = jwt.sign(findUser, secret);
  res.cookie("cookieName", JSON.stringify(token), {
    maxAge: 101011010,
    httpOnly: true,
  });
  res.send(allUsers);
};

export const searchBooksData=(req,res)=>{
    const {name}= req.body;
 console.log(name)
    
    const allUsers = new Users()
    const findBook = allUsers.searchBooks(name);
   res.send(findBook);
   console.log(findBook);
   
    
    
}