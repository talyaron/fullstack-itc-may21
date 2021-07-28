"use strict";

var films = [];

var _require = require("express"),
    query = _require.query;

var express = require("express");

var app = express(); //Settings

app.set("port", 5000 || process.env.PORT); //MidelWare

app.use(express.json()); //Routes

app.get("/getFilms", function (req, res) {
  res.send(films);
});
app.get("/getFilmsByName/:name", function (req, res) {
  //YS: Ok, but it should be by id instead of name. /getFilmsByName/:id
  var name = req.params.name;
  var findByName = films.filter(function (film) {
    return film.name === name;
  });
  res.send(findByName);
});
app.post("/addFilm", function (req, res) {
  try {
    var body = req.body;
    var name = body.name,
        id = body.id;

    if (!name || !id) {
      throw new Error("Escribilo bin"); //YS: Haha
    }

    var noRepeat = films.some(function (film) {
      return film.id === id;
    }); //YS: Nice! 

    if (noRepeat) {
      throw new Error("Ya esta");
    }

    films.push(body);
    res.send(films);
  } catch (error) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app["delete"]("/deleteFilm/:id", function (req, res) {
  var id = req.params.id;
  var deleteFilm = films.filter(function (film) {
    return film.id !== id;
  });
  films = deleteFilm;
  res.send(films);
});
app.put("/updateFilm/:id", function (req, res) {
  var body = req.body;
  var name = body.name,
      id = body.id; //YS: Why are you sending an ID in the body and in the params too? Also, it should be destructured like this: const { name, id } = req.body

  var updateFilm = films.find(function (film) {
    return film.id === id;
  });
  updateFilm.name = name;
  res.send(updateFilm);
}); //Listen

app.listen(app.get("port"), function () {
  console.log("app listening at http://localhost:".concat(app.get("port")));
});