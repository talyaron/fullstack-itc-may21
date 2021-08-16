export{}


export class User {
    name:string;
    email:string;
    password:string;
    createdSurvey: Array<string>




    constructor(name, email, password, createdSurvey) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdSurvey = createdSurvey;  
    }
}

