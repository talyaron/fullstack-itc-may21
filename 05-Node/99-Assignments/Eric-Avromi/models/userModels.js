"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, password, createdSurvey) {
        this.name = name;
        this.email = email;
        this.password = password;
        // this.id = uuidv4();
        this.createdSurvey = []; //this will get survey Id..
    }
    return User;
}());
exports.User = User;
// export class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }
