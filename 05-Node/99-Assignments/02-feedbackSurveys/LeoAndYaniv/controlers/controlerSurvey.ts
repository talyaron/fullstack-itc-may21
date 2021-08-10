export {};

import { Survey, Question } from "../models/surveys";
const fs = require("fs");

//Function to read the JSON of created surveys
export const readJsonSurveys = () => {
  try {
    const surveys = fs.readFileSync("./surveys.json");
    return JSON.parse(surveys);
  } catch (error) {
    console.error(error);
  }
};

//Function to add a new question into the survey
export function addQuestion(req, res) {
  const { uuid } = req.params;
  let allSurveys = readJsonSurveys();
  const surveyExist = allSurveys.find((survey) => survey.uuid === uuid);

  const newQuestion = new Question(req.body.question);
  
  surveyExist.questions.push(newQuestion);
  console.log(surveyExist);

  /*
  const allUsers = readJson();
  allUsers.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsers));
  res.send({ message: "A new User was added", user: user }); */
}

//Function to create an empty survey
export function newSurvey(req, res) {
  //User email sended by params in the URL
  const { id } = req.params;
  const survey = new Survey(id);
  const allSurveys = readJsonSurveys();
  allSurveys.push(survey);
  fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
  res.send({ message: "A new Survey was added", survey: survey });
}
