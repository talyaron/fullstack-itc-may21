export {};
const { v4: uuidv4 } = require("uuid");

export class Rating {
  filler: string; //(email)
  rating: number; //(1-5)
  constructor() {
    this.filler = null;
    this.rating = null;
  }
}

export class Question {
  content: string;
  ratings: Array<Rating>; //(number of fillers & average rating)
  constructor(content) {
    this.content = content;
    this.ratings = []; //when user raiting update
  }
}

export class Survey {
  uuid: string;
  admin: string; //(email)
  questions: Array<Question>;
  constructor(admin, questions) {
    this.uuid = uuidv4();
    this.admin = admin;
    this.questions = []; //when the user push add here
    /* createSurvey()
addQuestion()
removeQuestion()
editQuestion{}
 */
  }
}
