"use strict";

var form = document.querySelector('#jokes-form');
form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  var joke = ev.target.elements.newJoke.value;
  axios.post('/addJoke', {
    joke: joke
  }).then(function (res) {
    console.log(res.data);
  })["catch"](function (e) {
    console.error(e);
  });
  ev.target.reset();
});