export { };

// LEER JSON Users
const localJson = () => {
    const fileJson = fs.readFileSync("./users.json");
    return JSON.parse(fileJson);
  };

export function getUsers(req, res) {
    const { cookieName } = req.cookies;
    const cookie = JSON.parse(cookieName);
    const { name } = cookie;
    res.send(name);
};  
