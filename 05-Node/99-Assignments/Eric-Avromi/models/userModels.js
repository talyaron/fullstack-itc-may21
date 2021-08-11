<<<<<<< HEAD
const fs = require('fs');



function addUsers(user){
    console.log('in add user ');
    const allUsers = fs.readFileSync("./users.json")
    console.log(allUsers);
    const allUsersPars = JSON.parse(allUsers)
    const updateUsers = allUsersPars.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsersPars));
    return console.log('user added ');

}










exports.addUsers = addUsers;
=======
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
>>>>>>> 7ede9140422e10234960c4192524dc701f2cbf7d
