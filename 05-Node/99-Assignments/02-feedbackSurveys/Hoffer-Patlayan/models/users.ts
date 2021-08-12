
export class User {
    name: string;
    email: string;
    password: string;
    createSurvey:Array<string>;
    constructor(name: string, email: string, password: string, createSurvey:Array<string>) {
      (this.name = name), (this.email = email), (this.password = password),(this.createSurvey = createSurvey);
    }
}


