import { readAllUsers } from "../models/user";

export const userExist = (req, res, next) => {
  const allUser = readAllUsers();
  const isFound = allUser.some((element) => element.email === req.body.email); //YS: Why not use find instead of some? 
  if (isFound) {
    res.status(400).send({error: "The User Already Exist"});
    
    return;
  }
  next();
};
