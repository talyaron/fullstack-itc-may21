export { }
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
import { Survey } from '../models/survey'

// READ SURVEY JSON
export const getAllSurveys = () => {
    const fileJson = fs.readFileSync("./db/survey.json");
    return JSON.parse(fileJson);
  };
// READ USERS JSON`
  export const getAllUsers = () => {
    const fileJson = fs.readFileSync("./db/survey.json");
    return JSON.parse(fileJson);
  };


  export function addSurveys(req: any, res: any) {
      // add survay from class to survay.json
      const getSuverys = getAllSurveys();
      let id = uuidv4();
      const newSurvey = new Survey(id, req.body.subTitle, req.cookies.email, req.body.questions);
      getSuverys.push(newSurvey);
      fs.writeFileSync("./db/survey.json", JSON.stringify(getSuverys))

      const getUsers = getAllUsers();
      const survUser = getUsers.find((user:any) => user.email === req.body.email);
      survUser.createSurvey.push(newSurvey);
      fs.writeFileSync("./db/users.json", JSON.stringify(getUsers));
      
      res.send({ok: "success"});
  }

  