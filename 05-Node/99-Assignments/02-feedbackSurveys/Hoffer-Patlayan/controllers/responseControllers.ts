export{};
const express = require("express");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const cookieParser = require("cookie-parser");
import {Response} from '../models/response';

app.use(express.json());
app.use(cookieParser());

// READ SURVEY JSON
export const getAllSurveys = () => {
  const fileJson = fs.readFileSync("./db/survey.json");
  return JSON.parse(fileJson);
};
// READ USERS JSON`
export const getAllUsers = () => {
  const fileJson = fs.readFileSync("./db/users.json");
  return JSON.parse(fileJson);
};


export function getSuveryShare(req: any, res: any) {
  const idQuery  = req.query;
  console.log(idQuery.id)
  const getSuvery = getAllSurveys();
  const findSurv = getSuvery.find((user:any) => user.id === idQuery.id);
  res.cookie('shareSurv', findSurv, { maxAge: 300000000, httpOnly: true });
  console.log(findSurv)
  res.send(findSurv);
}

// export function getSuveryShareCookie(req: any, res: any) {
//   const shareCookie  = req.cookies.shareSurv;
//   console.log(shareCookie)
//   res.send(shareCookie);
// }




