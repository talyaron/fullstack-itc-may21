export {};

import { Surveys, Survey, Question } from "../models/surveys";

//Function to get all the surveys from a specific user
export function getSurveys(req, res) {
  try {
    const { emailLogIn } = req.params;
    let allSurveys = new Surveys;
    const surveysFromUser = allSurveys.findUserSurveys(emailLogIn);
    res.send({
      message: "You get all the surveys from the user login",
      surveys: surveysFromUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//Function to create an empty survey
export function newSurvey(req, res) {
  //User email sended by params in the URL
  const { id } = req.params; // admin email
  const newSurvey = {uuid: null, title: null, admin: id, questions: null};
  const survey = new Survey(newSurvey);
  const allSurveys = new Surveys;
  allSurveys.createSurvey(survey);
  res.send({ message: "A new Survey was added", survey });
}

//Function to delete the completly survey
export function deleteSurvey(req, res) {
  const { uuid } = req.params;
  let allSurveys = new Surveys;
  allSurveys.deleteSurvey(uuid);

  res.send({ message: "The survey was deleted", userInfo: req.email });
}

//Function to add a new question into the survey
export function addQuestion(req, res) {
  const { uuid } = req.params;
  let allSurveys = new Surveys;
  const surveyToUpdate = new Survey(allSurveys.findSurvey(uuid));

  const newQuestion = new Question(req.body.question);

  surveyToUpdate.addQuestion(newQuestion);

  allSurveys.updateSurvey(surveyToUpdate);

  res.send({ message: "A new Question was added", survey: surveyToUpdate });
}

// //Function to get a question from a specific survey
export function getQuestionsSurvey(req, res) {
  //User email sended by params in the URL
  const { uuid } = req.params;
  let allSurveys = new Surveys;
  const surveyToUpdate = allSurveys.findSurvey(uuid);

  res.send({ survey: surveyToUpdate });
}

//Function to delete a question
export function deleteQuestion(req, res) {
  const { id, uuid } = req.params; // id: question uuid; uuid: survey uuid
  let allSurveys = new Surveys();
  const surveyToUpdate = new Survey(allSurveys.findSurvey(uuid));
  //Inside the questions of a specific Survey I will filter the question that I dont want
  surveyToUpdate.deleteQuestion(id)
  allSurveys.updateSurvey(surveyToUpdate);

  res.send({ message: "A question was deleted", survey: surveyToUpdate });
}