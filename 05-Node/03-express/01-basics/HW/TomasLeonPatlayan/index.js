const films = [];

const express = require("express");

const app = express();

//Settings
app.set("port", 5000 || process.env.PORT);

//MidelWare
app.use(express.json());

//Routes

app.get("/getFilms", (req, res) => {
  res.send({ films });
});

app.post("/addFilm", (req, res) => {
  const { body } = req;
  films.push(body);
  res.send(films);
});

//ver que es search
// ver ${query.id}
app.delete(`/deleteFilm/:id`, (req, res) => {
  //   const { id } = req.params;
  //   let delteFilms = films.filter((film) => film.id !== id);
  //   films = delteFilms;
  //   res.send({ films });
  const { id } = req.params.id;
  const deleteFilm = films.filter((film) => film.id !== id);
  films = deleteFilm;
  res.send({ deleteFilm });
});

//Listen
app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${app.get("port")}`);
});
