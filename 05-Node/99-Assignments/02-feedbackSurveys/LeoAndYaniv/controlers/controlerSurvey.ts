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
  fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
  res.send({ message: "A new Question was added", survey: surveyExist });
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

//Function to create an empty survey
export function getQuestionsSurvey(req, res) {
  //User email sended by params in the URL
  const { uuid } = req.params;
  let allSurveys = readJsonSurveys();
  const surveyExist = allSurveys.find((survey) => survey.uuid === uuid);

  res.send({ survey: surveyExist });
}

//Function to delete a question
export function deleteQuestion(req, res) {
  const { id, uuid } = req.params;
  let allSurveys = readJsonSurveys();
  const surveyExist = allSurveys.find((survey) => survey.uuid === uuid);
  //Inside the questions of a specific Survey I will filter the question that I dont want
  surveyExist.questions = surveyExist.questions.filter(
    (survey) => survey.uuid !== id
  );

  fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
  res.send({ message: "A question was deleted", surveys: surveyExist });
}
