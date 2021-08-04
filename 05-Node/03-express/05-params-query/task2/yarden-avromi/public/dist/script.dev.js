"use strict";

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var joke = event.target.elements.joke.value;
  fetch('/sendJoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      joke: joke
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return console.log(data);
  });
  event.target.reset();
}