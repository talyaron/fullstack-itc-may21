"use strict";

function handleRegister(ev) {
  //YS: Good! 
  ev.preventDefault();

  try {
    var username = ev.target.elements.username.value;
    var password = ev.target.elements.password.value;
    var email = ev.target.elements.email.value;
    var result = axios.post('/users', {
      username: username,
      password: password,
      email: email
    });

    if (result.data === "Email already taken!") {
      alert("".concat(result.data));
    } else {
      alert("Register succesful, ".concat(username, "!"));
    }

    ev.target.reset();
  } catch (e) {
    console.error(e);
  }
}

document.querySelector(".form-field").addEventListener("submit", handleRegister);