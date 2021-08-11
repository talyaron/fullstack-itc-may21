export { };
import {User} from '../models/users';
const fs = require("fs");
// LEER JSON Users
const localJson = () => {
    const fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
  };

  export function registerUser(req: any, res: any) {
    const { name, email, password } = req.body;
    const users = localJson();
    const user = new User(name , email, password,[])
    users.push(user);
    fs.writeFileSync("./db/users.json", JSON.stringify(users));
    console.log(users);
    
    res.send(users);
  }   