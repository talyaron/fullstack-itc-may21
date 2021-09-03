export {};
import { readUsers, User, Users } from "../model/userModel";
const fs = require('fs')
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
export const deleteUsers = (req,res)=> {
  const {id}= req.params;
  const allUser = new Users();
  allUser.deleteUser(id);
  res.send(allUser)
  
}
export const bringInfo = (req: any, res: any,  ) => {
  let { id } = req.params;

  const allProduct = readUsers();
  const findProduct = allProduct.find((element) => element.id === id);


  res.send(findProduct);
 
};
export const editUser = (req,res)=>{
  const {id}= req.params;
  const {name,color,image} = req.body;
   
  const users = readUsers();
  const findUser  = users.find((element)=> element.id === id);
  findUser.name =name;
  findUser.color = color;
  findUser.image = image;
  fs.writeFileSync("./db/users.json", JSON.stringify(users));
  res.send(users)
}

export function searchByFirstname(req, res){
    
  const {name} = req.body
  const allUser = new Users()
  const findUsers = allUser.searchStudentsByFirstname(name)
  console.log(findUsers);
  
  res.send( findUsers)    
}