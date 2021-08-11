export {};
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require('path');
const surveysJsonPath = path.resolve(__dirname, './surveys.json');

//Function to read the JSON of created surveys
export const readJsonSurveys = () => {
  try {
    const surveys = fs.readFileSync(surveysJsonPath);
    return JSON.parse(surveys);
  } catch (error) {
    console.error(error);
  }
};

export class Rating {
  filler: string; //(email)
  rating: number; //(1-5)
  constructor() {
    this.filler = null;
    this.rating = null;
  }
}

export class Question {
  uuid: string;
  content: string;
  ratings: Array<Rating>; //(number of fillers & average rating)
  constructor(content) {
    this.uuid = uuidv4();
    this.content = content;
    this.ratings = []; //when user raiting update
  }
}

export class Survey {
  uuid: string;
  title: string;
  admin: string; //(email)
  questions: Array<Question>;
  constructor(admin) {
    this.uuid = uuidv4();
    this.title = "";
    this.admin = admin;
    this.questions = []; //when the user push add here
  }

  addQuestion(newQuestion) {
    try {
      this.questions.push(newQuestion);

    } catch (error) {
      console.error(error);
    }
  }

  deleteQuestion(questionId) {
    try {
      this.questions.filter(question => question.uuid !== questionId);

    } catch (error) {
      console.error(error);
    }
  }

  editQuestion() {
    try {
    } catch (error) {
      console.error(error);
    }
  }
}

export class Surveys {
  surveys: Array<Survey>;

  constructor() {
    this.surveys = readJsonSurveys();
  }

  updateSurveysJson() {
    try {
        fs.writeFileSync(surveysJsonPath,JSON.stringify(this.surveys));

    } catch (error) {
        console.error(error);
    }
  }

  findUserSurveys(adminEmail) {
    try {
      const adminSurveys = this.surveys.filter(survey => survey.admin === adminEmail);

      return adminSurveys;

    } catch (error) {
      console.error(error);
    }
  }

  createSurvey(newSurvey) {
    try {
      this.surveys.push(newSurvey);

      this.updateSurveysJson();

    } catch (error) {
      console.error(error);
    }
  }
 
  deleteSurvey(surveyUuid) {
    try {
      this.surveys.filter(survey => survey.uuid !== surveyUuid);

      this.updateSurveysJson();

    } catch (error) {
      console.error(error);
    }
  }

  findSurvey(surveyUuid) {
    try {
      const survey = this.surveys.find(surveyItem => (surveyItem.uuid === surveyUuid));
      
      return survey;

    } catch (error) {
      console.error(error);
    }
  }

  updateSurvey(surveyToUpdate) {
    try {
      const survey = this.findSurvey(surveyToUpdate.uuid);
      survey.questions = surveyToUpdate.questions;
      
      this.updateSurveysJson();
      
      return survey;

    } catch (error) {
      console.error(error);
    }
  }
}