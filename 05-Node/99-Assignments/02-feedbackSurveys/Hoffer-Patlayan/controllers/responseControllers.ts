export{};
import {Response} from '../models/response';
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');



const getAllSurveys = () => {
    const fileJson = fs.readFileSync("./db/survey.json");
    return JSON.parse(fileJson);
  };

const getResponds = ()=> {
    const fileJson = fs.readFileSync("./db/response.json");
    return JSON.parse(fileJson);
}
