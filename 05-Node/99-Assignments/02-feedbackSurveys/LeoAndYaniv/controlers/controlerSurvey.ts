export {};

import { Surveys, Survey, Question } from "../models/surveys";

//Function to get all the surveys from a specific user
export function getSurveys(req, res) {
  try {
    const { admin } = req.params;
    const allSurveys = new Surveys;
    const surveysFromUser = allSurveys.findUserSurveys(admin);
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
  const { admin } = req.params; // admin email
  
  const newSurvey = {uuid: null, title: null, admin, questions: null};
  const survey = new Survey(newSurvey);
  
  const allSurveys = new Surveys;
  allSurveys.createSurvey(survey);
  res.send({ message: "A new Survey was added", survey });
}

//Function to delete the completly survey
export function deleteSurvey(req, res) {
  const { uuid } = req.params;
  console.log(req.email);
  const allSurveys = new Surveys;
  allSurveys.deleteSurvey(uuid);

  res.send({ message: "The survey was deleted", userDetails: req.email });
}

//Function to add a new question into the survey
export function addQuestion(req, res) {
  const { uuid } = req.params;
  const allSurveys = new Surveys;
  const surveyToUpdate = new Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);

  const newQuestion = new Question(req.body.question);

  surveyToUpdate.addQuestion(newQuestion);
  allSurveys.updateSurvey(surveyToUpdate);

  res.send({ message: "A new Question was added", survey: surveyToUpdate });
}

// //Function to get a question from a specific survey
export function getQuestionsSurvey(req, res) {
  //User email sended by params in the URL
  const { uuid } = req.params;
  const allSurveys = new Surveys;
  const surveyToUpdate = allSurveys.surveys[allSurveys.findSurveyIndex(uuid)];

  res.send({ survey: surveyToUpdate });
}

//Function to delete a question
export function deleteQuestion(req, res) {
  const { qUuid, uuid } = req.params; // qUuid: question uuid; uuid: survey uuid
  const allSurveys = new Surveys();
  const surveyToUpdate = new Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
  //Inside the questions of a specific Survey I will filter the question that I dont want
  surveyToUpdate.deleteQuestion(qUuid)
  allSurveys.updateSurvey(surveyToUpdate);

  res.send({ message: "A question was deleted", survey: surveyToUpdate });
}

export function editQuestion(req, res) {
  const { qUuid, uuid } = req.params; // qUuid: question uuid; uuid: survey uuid
  const allSurveys = new Surveys();
  const surveyToUpdate = new Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);

  const editedQuestion = new Question(req.body.questionContent);
  
  //Inside the questions of a specific Survey I will filter the question that I dont want
  surveyToUpdate.editQuestion(qUuid, editedQuestion.content)
  allSurveys.updateSurvey(surveyToUpdate);

  res.send({ message: "The question was edited", survey: surveyToUpdate });
}

//Function to update questions of a survey
export function updateQuestionsSurvey(req, res) {
  const { uuid } = req.params;
  const allSurveys = new Surveys;
  const surveyToUpdate = new Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
  
  const answeredQuestions = req.body; 
  answeredQuestions.forEach(question => surveyToUpdate.updateQuestionRating(question.questionId, question.rating));
  
  allSurveys.updateSurvey(surveyToUpdate);

  res.send({ message: "A new Question was added", survey: surveyToUpdate });
}