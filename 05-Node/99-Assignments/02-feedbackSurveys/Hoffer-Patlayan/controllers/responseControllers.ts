export {};
const express = require("express");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");
import { Response } from "../models/response";   //YS: There are some imports you are not using

app.use(express.json());
app.use(cookieParser());

// READ SURVEY JSON
export const getAllSurveys = () => { //YS: Models
  const fileJson = fs.readFileSync("./db/survey.json");
  return JSON.parse(fileJson);
};
// READ USERS JSON`
export const getAllUsers = () => { //YS: Models
  const fileJson = fs.readFileSync("./db/users.json");
  return JSON.parse(fileJson);
};
// READ RESPONSE JSON`
export const getAllResponse = () => { //YS: Models DRY
  const fileJson = fs.readFileSync("./db/response.json");
  return JSON.parse(fileJson);
};

export const getAllResponds = () => { //YS: Models DRY
  const fileJson = fs.readFileSync("./db/response.json");
  return JSON.parse(fileJson);
};

export function getSuveryShare(req: any, res: any) {
  const idQuery = req.query;
  const getSuvery = getAllSurveys();
  const findSurv = getSuvery.find((user: any) => user.id === idQuery.id);
  res.cookie("shareSurv", findSurv, { maxAge: 300000000, httpOnly: true });
  res.send(findSurv);
}

export function sendRespon(req: any, res: any) { 
  const { id, arr} = req.body;
try {
  
} catch (error) {
  
}
    // const resp:any = [];
    const array223:any = [];

  const responds = getAllResponds();
  // const getSuvery = getAllSurveys();
  const survey = getAllSurveys();

  const a = survey.find((user: any) => user.id === id);
  const questionLength = Object.keys(a.question).length;
  const findResponse = responds.find((response: any) => response.id === id);

  if (findResponse !== undefined) {
    // console.log("me encontraste", arr);

    // findResponse.respondes = [...findResponse.respondes, ...arr];

    // console.log(responds);

   
    // for (let i = 0; i < findResponse.respondes.length; i += 2) {
    //    array223.push(findResponse.respondes.slice(i, i + 2));
    // }

    for (let i = 0; i <  findResponse.respondes.length; i += questionLength) {
        const chunk =  findResponse.respondes.slice(i, i + questionLength);
        array223.push(chunk);
    }
   console.log(array223);
   const aa = {
    id: a.id,
    title: a.title,
    question: a.question,
    // respondes: array223,
  };

  responds.push(aa);
  survey.push(aa);
    // return res;

    
  //  responds.push(newResponses)
  // console.log(array223);
  
   // [ [ 1, 1 ], [ 1, 1 ], [ 2, 3 ], [ 2, 3 ] [1]]

  } else {
    console.log('Hola Arr',arr);
  
  }

  fs.writeFileSync("./db/response.json", JSON.stringify(responds));

  fs.writeFileSync("./db/survey.json", JSON.stringify(survey));

  // const respond = new Response(id,arr);
  // responds.push(respond);
  // fs.writeFileSync("./db/response.json", JSON.stringify(responds));

  res.send(responds);
  res.send(survey);
}

export function getResp(req: any, res: any) {
  const getRes = getAllResponse();
  // console.log(getRes);
  // const findByTitle
  res.send(getRes);
}

// export const addResResult = (req: any, res: any) => {
//   const { id,respondes } = req.body;

//   const getSuvery = getAllSurveys();
//   const allRes = getAllResponse();

//   const putInSurvey = allRes.find((resp:any)=> resp.id ===id);

//   const arrResp = [ {
//     id:id,
//     respondes:respondes,
//   }]

// console.log(arrResp);
// // getSuvery.push(arrResp);

// // fs.writeFileSync("./db/survey.json", JSON.stringify(getSuvery));
// // res.send(getSuvery)
// };
