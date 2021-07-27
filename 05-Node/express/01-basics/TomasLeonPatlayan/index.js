import express from "express";
const app = express();
const port = process.env.PORT || 4200;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("PEPE");
});

app.post("/addPepe", (req, res) => {
  const { body } = req;
  console.log(body);
  res.send(body.res)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
