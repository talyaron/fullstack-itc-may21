export {};

import { Surveys, Survey, Question } from "../models/surveys";

//Function to get all the surveys from a specific user
export function getSurveys(req, res) {
  try {
    const admin = req.email;
    const allSurveys = new Surveys();
    const surveys = allSurveys.findUserSurveys(admin);
    res.send({
      message: "You get all the surveys from the user login",
      surveys,
      admin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to create an empty survey
export function newSurvey(req, res) {
  try {
    //User email sended by params in the URL
    const admin = req.email;

    const newSurvey = { uuid: null, title: null, admin, questions: null };
    const survey = new Survey(newSurvey);

    const allSurveys = new Surveys();
    allSurveys.createSurvey(survey);
    res.send({ message: "A new Survey was added", survey });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to delete the completly survey
export function deleteSurvey(req, res) {
  try {
    const { uuid } = req.params;
    const allSurveys = new Surveys();
    allSurveys.deleteSurvey(uuid);

    res.send({ message: "The survey was deleted", userDetails: req.email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to add a new question into the survey
export function addQuestion(req, res) {
  try {
    const { uuid } = req.params;
    const allSurveys = new Surveys();
    const surveyToUpdate = new Survey(
      allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]
    );

    const newQuestion = new Question(req.body.question);

    const howManyQuestions: number = surveyToUpdate.addQuestion(newQuestion);
    let disableAddQuestionBtn: boolean = false;
    let disableSubmitSurvey: boolean = false;
    if (howManyQuestions > 9) disableAddQuestionBtn = true;
    if (howManyQuestions === 0) disableSubmitSurvey = true;

    allSurveys.updateSurvey(surveyToUpdate);

    res.send({
      message: "A new Question was added",
      survey: surveyToUpdate,
      disableAddQuestionBtn,
      disableSubmitSurvey,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

// //Function to get a question from a specific survey
export function getQuestionsSurvey(req, res) {
  try {
    //User email sended by params in the URL
    const { uuid } = req.params;
    const allSurveys = new Surveys();
    const surveyToUpdate = allSurveys.surveys[allSurveys.findSurveyIndex(uuid)];
    res.send({ survey: surveyToUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to delete a question
export function deleteQuestion(req, res) {
  try {
    const { qUuid, uuid } = req.params; // qUuid: question uuid; uuid: survey uuid
    const allSurveys = new Surveys();
    const surveyToUpdate = new Survey(
      allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]
    );
    //Inside the questions of a specific Survey I will filter the question that I dont want

    const howManyQuestions: number = surveyToUpdate.deleteQuestion(qUuid);
    let disableAddQuestionBtn: boolean = false;
    let disableSubmitSurvey: boolean = false;
    if (howManyQuestions > 9) disableAddQuestionBtn = true;
    if (howManyQuestions === 0) disableSubmitSurvey = true;

    allSurveys.updateSurvey(surveyToUpdate);

    res.send({
      message: "A question was deleted",
      survey: surveyToUpdate,
      disableAddQuestionBtn,
      disableSubmitSurvey,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export function editQuestion(req, res) {
  try {
    const { qUuid, uuid } = req.params; // qUuid: question uuid; uuid: survey uuid
    const allSurveys = new Surveys();
    const surveyToUpdate = new Survey(
      allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]
    );

    const editedQuestion = new Question(req.body.questionContent);

    //Inside the questions of a specific Survey I will filter the question that I dont want
    surveyToUpdate.editQuestion(qUuid, editedQuestion.content);
    allSurveys.updateSurvey(surveyToUpdate);

    res.send({ message: "The question was edited", survey: surveyToUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

//Function to update questions of a survey
export function updateQuestionsSurvey(req, res) {
  try {
    const { uuid } = req.params;
    const allSurveys = new Surveys();
    const surveyToUpdate = new Survey(
      allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]
    );

    const answeredQuestions = req.body;
    answeredQuestions.forEach((question) =>
      surveyToUpdate.updateQuestionRating(question.questionId, question.rating)
    );

    allSurveys.updateSurvey(surveyToUpdate);

    res.send({ message: "A new Question was added", survey: surveyToUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
