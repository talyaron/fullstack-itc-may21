export {};
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const surveysJsonPath = path.resolve(__dirname, "./surveys.json");

//Function to read the JSON of created surveys
export const readJsonSurveys = () => {
  try {
    const surveys = fs.readFileSync(surveysJsonPath);
    let surveysInCreation = JSON.parse(surveys);
    let surveysWithTitles = JSON.parse(surveys);
    surveysWithTitles = surveysWithTitles.filter(survey => survey.title !== '');
    // keep surveys created in last 15 mins, even WO title
    surveysInCreation = surveysInCreation.filter(survey => (Date.now() - survey.createdDate < 900000));
    surveysInCreation = surveysInCreation.filter(survey => survey.title === '');
    const surveysToKeep = [ ...surveysWithTitles, ...surveysInCreation ]
    return surveysToKeep;
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
  createdDate: any;
  constructor({ uuid, title, admin, questions }) {
    this.uuid = uuid === null ? uuidv4() : uuid;
    this.title = uuid === null ? "" : title;
    this.admin = admin;
    this.questions = (questions === null) ? [] : questions; //when the user push add here
    this.createdDate = Date.now();
  }

  addQuestion(newQuestion) {
    try {
      this.questions.push(newQuestion);

      return this.questions.length;

    } catch (error) {
      console.error(error);
    }
  }

  deleteQuestion(questionId) {
    try {
      this.questions = this.questions.filter(question => (question.uuid !== questionId));

      return this.questions.length;

    } catch (error) {
      console.error(error);
    }
  }

  editQuestion(questionId, editedQuestion) {
    try {
      const questionToEditIndex = this.questions.findIndex(question => (question.uuid === questionId));
      this.questions[questionToEditIndex].content = editedQuestion;

    } catch (error) {
      console.error(error);
    }
  }

  updateQuestionRating(questionId, questionRating) {
    try {
      const questionToEditIndex = this.questions.findIndex(question => (question.uuid === questionId));
      this.questions[questionToEditIndex].ratings.push(questionRating);

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
      fs.writeFileSync(surveysJsonPath, JSON.stringify(this.surveys));
    } catch (error) {
      console.error(error);
    }
  }

  updateTitleSurveysJson(updatedSurveys) {
    try {
      fs.writeFileSync(surveysJsonPath, JSON.stringify(updatedSurveys));
    } catch (error) {
      console.error(error);
    }
  }

  findUserSurveys(adminEmail) {
    try {
      const adminSurveys = this.surveys.filter(
        (survey) => survey.admin === adminEmail
      );

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
      this.surveys = this.surveys.filter(survey => survey.uuid !== surveyUuid);

      this.updateSurveysJson();
    } catch (error) {
      console.error(error);
    }
  }

  findSurveyIndex(surveyUuid) {
    try {
      const surveyIndex = this.surveys.findIndex(
        (surveyItem) => surveyItem.uuid === surveyUuid
      );
      return surveyIndex;
    } catch (error) {
      console.error(error);
    }
  }

  updateSurvey(surveyToUpdate) {
    try {
      this.surveys[this.findSurveyIndex(surveyToUpdate.uuid)] = surveyToUpdate;

      this.updateSurveysJson();

    } catch (error) {
      console.error(error);
    }
  }
}
