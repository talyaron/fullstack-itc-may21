export { };
const fs = require("fs");
// LEER JSON Users
const localJson = () => {
    const fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
  };


  export function registerUser(req: any, res: any) {
    const { name, email, password } = req.body;
    const users = localJson();
    const addUser = {
   
      name: name,
      email: email,
      password: password,  
    };
    users.push(addUser);
    fs.writeFileSync("./db/users.json", JSON.stringify(users));
    console.log(users);
    
    res.send(users);
  }   