export class User {
    name:string;
    email:string;
    password:string;
    id:string;
    createdSurvey:Array<string>;
    constructor(name, email, password,createdSurvey) {
        this.name = name;
        this.email = email;
        this.password = password;
        // this.id = uuidv4();
        this.createdSurvey = [];  //this will get survey Id..
    }
}




// export class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }


