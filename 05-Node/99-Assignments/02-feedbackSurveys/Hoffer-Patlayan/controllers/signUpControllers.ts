export { };

// LEER JSON Users
const localJson = () => {
    const fileJson = fs.readFileSync("./users.json");
    return JSON.parse(fileJson);
  };


  export function registerUser(req: any, res: any) {
    const { name, email, password } = req.body;
    const users = localJson();
    const addUser = {
      id: uuidv4(),
      name: name,
      email: email,
      password: password,  
    };
    users.push(addUser);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send(users);
  }   