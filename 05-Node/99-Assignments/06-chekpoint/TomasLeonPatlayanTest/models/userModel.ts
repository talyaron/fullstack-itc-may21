const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const pasthtoUserJson = path.resolve(__dirname, "../db/user.json");
export const readUsers = () => {
  const users = fs.readFileSync(pasthtoUserJson);

  return JSON.parse(users);
};
export class User {
  id: string;
  name: string;
bookName:string

  constructor(name: string, bookName:string ) {
    (this.id = this.id = uuidv4()),
      (this.name = name),
     this.bookName = bookName;
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

  
  searchBooks(name){
      const regExp = `^${name}`
   const searchRegExp = new RegExp(regExp,'i')
  const searchBooksByName = this.users.filter((element)=> searchRegExp.test(element.name))
  console.log(searchBooksByName);
  
  return searchBooksByName
  }
}
 