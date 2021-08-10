export { };

// LEER JSON Users
const localJson = () => {
    const fileJson = fs.readFileSync("./users.json");
    return JSON.parse(fileJson);
  };

export function logInUser(req, res) {
    try {
        const { name, email, password } = req.body;
        const users = localJson();
        const correctUser = users.some(
          (elements) =>
            elements.name === name &&
            elements.email === email &&
            elements.password === password
        );
        if (correctUser) {
          const doLogin = users.find(
            (elements) =>
              elements.name === name &&
              elements.email === email &&
              elements.password === password
          );
          res.cookie("cookieName", JSON.stringify(doLogin), {
            maxAge: 3000000,
            httpOnly: true,
          });
          res.send({ ok: "Hello, thanks for coming back" });
        } else {
          throw new Error("No hay PEPE");
        }
      } catch (e) {
        res.status(500).send({ e: `${e}` });
      }
};  
