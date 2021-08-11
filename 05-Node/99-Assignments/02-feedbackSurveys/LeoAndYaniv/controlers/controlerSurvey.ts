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

//Function to get a question from a specific survey
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

//Function to delete the completly survey
export function deleteSurvey(req, res) {
  const { uuid } = req.params;
  let allSurveys = readJsonSurveys();
  allSurveys = allSurveys.filter((survey) => survey.uuid !== uuid);

  //Read cookies to send the data from the user login
  const { cookieName } = req.cookies;
  const cookie = JSON.parse(cookieName);

  fs.writeFileSync("./surveys.json", JSON.stringify(allSurveys));
  res.send({ message: "A question was deleted", userInfo: cookie.email });
}

//Function to get all the surveys from a specific user
export function getSurveys(req, res) {
  try {
    const { emailLogIn } = req.params;
    let allSurveys = readJsonSurveys();
    const surveysFromUser = allSurveys.filter(
      (survey) => survey.admin === emailLogIn
    );
    res.send({
      message: "You get all the surveys from the user login",
      surveys: surveysFromUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
