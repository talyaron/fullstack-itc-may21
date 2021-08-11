"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

<<<<<<< HEAD
function addUsers(user) {
  console.log('in add user ');
  var allUsers = fs.readFileSync("./users.json");
  console.log(allUsers);
  var allUsersPars = JSON.parse(allUsers);
  var updateUsers = allUsersPars.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsersPars));
  return console.log('user added ');
}
=======
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
>>>>>>> 7ede9140422e10234960c4192524dc701f2cbf7d

var User = function User(name, email, password) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.id = uuidv4();
  this.createdSurvey = []; //this will get survey Id..
}; // export class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }


exports.User = User;