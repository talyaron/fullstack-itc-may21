let films = [];

const { query } = require("express");
const express = require("express");

const app = express();

//Settings
app.set("port", 5000 || process.env.PORT);

//MidelWare
app.use(express.json());

//Routes

app.get("/getFilms", (req, res) => {
  res.send(films);
});

app.get("/getFilmsByName/:name", (req, res) => { //YS: Ok, but it should be by id instead of name. /getFilmsByName/:id

  const { name } = req.params;

  const findByName = films.filter((film) => film.name === name);

  res.send(findByName);
});

app.post("/addFilm", (req, res) => {
  try {
    const { body } = req;
    const { name, id } = body;
    if (!name || !id) {
      throw new Error("Escribilo bin"); //YS: Haha
    }
    const noRepeat = films.some((film) => film.id === id); //YS: Nice! 
    if (noRepeat) {
      throw new Error("Ya esta");
    }
    films.push(body);
    res.send(films);
  } catch (error) {
    res.status(500).send({ error: `${e}` });
  }
});

app.delete("/deleteFilm/:id", (req, res) => {
  const { id } = req.params;
  const deleteFilm = films.filter((film) => film.id !== id);
  films = deleteFilm;
  res.send(films);
});

app.put("/updateFilm/:id", (req, res) => {
  const { body } = req;
  const { name, id } = body; //YS: Why are you sending an ID in the body and in the params too? Also, it should be destructured like this: const { name, id } = req.body

  const updateFilm = films.find((film) => film.id === id);

  updateFilm.name = name;

  res.send(updateFilm);
});

//Listen
app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${app.get("port")}`);
});
