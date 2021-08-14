export { }
const express = require("express");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
import { Survey } from '../models/survey'


app.use(bodyParser());
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

  export function addSurveys(req: any, res: any) {
      // add survay from class to survay.json
      const getSuverys = getAllSurveys();
      const getCookie  = JSON.parse(req.cookies.cookieName);
      let id = uuidv4();
      const newSurvey = new Survey(id, req.body.title, getCookie.email, req.body.questions);
      getSuverys.push(newSurvey);
      fs.writeFileSync("./db/survey.json", JSON.stringify(getSuverys))

      const getUsers = getAllUsers();
      const survUser = getUsers.find((user:any) => user.email === getCookie.email);
      survUser.createSurvey.push(newSurvey);
      fs.writeFileSync("./db/users.json", JSON.stringify(getUsers));
      
      res.send({ok: "success"});
  }

  export function getLogInUser(req: any, res: any) {
    const getUsers = getAllUsers();
    const getCookie  = JSON.parse(req.cookies.cookieName);
    const findLogInUser = getUsers.find((user:any) => user.email === getCookie.email);
    res.send(findLogInUser);
  }

  export function deleteSurvey(req: any, res: any) {
    const { id } = req.params;
    let getUsers = getAllUsers();
    const getCookie  = JSON.parse(req.cookies.cookieName);
    const findLogInUser = getUsers.findIndex((user:any) => user.email === getCookie.email);
    const find = getUsers.find((user:any) => user.email === getCookie.email);
    getUsers[findLogInUser].createSurvey = find.createSurvey.filter((surv:any) =>surv.id !== id);
    fs.writeFileSync("./db/users.json", JSON.stringify(getUsers));
 
  }

