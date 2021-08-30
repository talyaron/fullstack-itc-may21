export {};

const fs = require("fs");

import { User, Users } from "../models/user";

const usersClass = new Users();

export function userRegister(req, res) {
  
  let isAdmin = false;

  let adminEmails = ["kobrinskye@gmail.com", "tal@gmail.com"];
  if (adminEmails.includes(req.body.email)) {
    isAdmin = true;
  }
  const user = new User(
    
    req.body.email,
    req.body.password,
    req.body.username,
    isAdmin,
    []);
    usersClass.addUser(user);
    res.send({user});
 
}

export function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const allUsers = usersClass.userList;

    const isUserPassOK = allUsers.some(
      (elem) => elem.email === email && elem.password === password);

    if (isUserPassOK) {
      const userLogin = allUsers.find(
        (elem) => elem.email === email && elem.password === password
      );
      res.cookie('cookieName', {isAdmin: userLogin.isAdmin, id:userLogin.id}, { maxAge: 30000000, httpOnly: false });  

      res.send({ userLogin });
    } else {
      throw new Error("Is incorrect your email or password. Try Again");
    }
  } catch (e) {
    res.status(500).send({ error: `${e.message}` });
  }
}
