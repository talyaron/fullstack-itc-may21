

export {};
// import {User} from '../models/users';
const fs = require("fs");
// LEER JSON Users
const localJson = () => {
  const fileJson = fs.readFileSync("./db/users.json");
  return JSON.parse(fileJson);
};

export function logInUser(req: any, res: any) {
  
 
 
    const { email, password } = req.body;
    const users = localJson();
    const correctUser = users.some(
      (elements: any) =>
        elements.email === email && elements.password === password
    );
    if (correctUser) {
      const doLogin = users.find(
        (elements: any) =>
          elements.email === email && elements.password === password
      );

      res.cookie("cookieName", JSON.stringify(doLogin), {
        maxAge: 3000000,
        httpOnly: true,
      });
      res.send({ userInfo: doLogin });
    } 
    
  
}