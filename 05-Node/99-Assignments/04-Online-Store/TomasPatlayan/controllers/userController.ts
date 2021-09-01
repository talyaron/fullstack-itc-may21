import { addUser, readCart, readUsers, User } from "../models/userModel";

export {};

 
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(cookieParser());
 

export const userRegister = (req: any, res: any) => {
  try {
  


      const user = new User(
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.password,
        []
      );
      if (
        req.body.name === "" &&
        req.body.email === "" &&
        req.body.password === ""
      ) {
        throw new Error("Please Fill the inputs");
      }
      const add = addUser(user)

  
      res.send({ ok: `Welcome ${req.body.name}`, allUser: add });
     
  } catch (error) {
    res.status(500).send({ error: `${error}` });
  }
};

export const userLogin = (req, res) => {
  try {
  //   let adminEmails = ["tomipatlayan@gmail.com", "tal@gmail.com"];
  // if (adminEmails.includes(req.body.email)) {
  //  console.log('pepe');
   
  // }

  const allUser = readUsers();

  const ifSome = allUser.some(
    (element) => element.email === req.body.email && element.password === req.body.password
  );

  if (ifSome) {
    const foundUser = allUser.find(
      (element) => element.email == req.body.email && element.password === req.body.password
    );

    res.cookie("cookieName", JSON.stringify(foundUser), {
  
      maxAge: 300303030,
      httpOnly: false,
    });
    res.send( foundUser );
  }else{
    throw new Error('User not Found')
  }
} catch (error) {
  res.status(404).send({ error: `${error}` });
}
};
export const getUser=(req:any,res:any) => {
  const getCookie = JSON.parse(req.cookies.cookieName);

 console.log(getCookie);

  res.send(getCookie);
}

