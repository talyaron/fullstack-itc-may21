const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const pasthtoUserJson = path.resolve(__dirname, "../db/users.json");
export const readUsers = () => {
  const users = fs.readFileSync(pasthtoUserJson);

  return JSON.parse(users);
};
export class User {
  id: string;
  name: string;
  color: string;
  image: string;

  constructor(name: string, color: string,image: string ) {
    (this.id = this.id = uuidv4()),
      (this.name = name),
      (this.color = color),
      (this.image = image);
  }
}

export class Users {
  users: Array<User>;
  constructor() {
    this.users = readUsers();
  }

  reWriteUserJson() {
    fs.writeFileSync(pasthtoUserJson, JSON.stringify(this.users));
  }

  createUser(user) {
    this.users.push(user);
    this.reWriteUserJson();
  }

  deleteUser(id){
    this.users = this.users.filter((element)=>element.id !== id);
    this.reWriteUserJson()
  }

  
  searchStudentsByFirstname(name:string){
        
        
    const regrExp: string = `^${name}`
    const searchTermReg: RegExp = new RegExp(regrExp, "i")
 

    
    const studentsFoundByFirstname = this.users.filter((element)=>searchTermReg.test(element.name));

    
    console.log(studentsFoundByFirstname);
 
    
    return studentsFoundByFirstname



}

  
}
