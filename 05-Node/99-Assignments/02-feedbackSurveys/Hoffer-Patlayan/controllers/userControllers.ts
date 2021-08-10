export { };
const fs = require("fs");
// LEER JSON Users
const localJson = () => {
    const fileJson = fs.readFileSync("./db/users.json");
    return JSON.parse(fileJson);
  };

export function getUsers(req: any, res: any) {
    const { cookieName } = req.cookies;
    const cookie = JSON.parse(cookieName);
    const { name } = cookie;
    res.send(name);
};  
