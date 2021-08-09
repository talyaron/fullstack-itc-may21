//log information

async function handleRegister(event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const password = event.target.elements.password.value;

  const newUser = {
    name: name,
    password: password,
  };

  const response = await registerPromise(newUser);
  const { ok } = response;
  alert(ok);
  event.target.reset();
}

async function handelLogIn(event) {
  event.preventDefault();

  //inputs
  const inputName = document.querySelector(".nameLogIn").value;
  const inputPassword = document.querySelector(".passwordLogIn").value;

  const user = {
    email: inputName,
    password: inputPassword,
  };

  const response = await signInPromise(user);
  const { ok } = response;
  alert(ok);
  window.location.href = "page2.html";
}

function registerPromise(newUser) {
  return new Promise((resolve, reject) => {
    fetch("/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then((newUser) => {
          resolve(newUser);
        });
      } else {
        return res.json().then((newUser) => {
          alert(newUser.error);
        });
      }
    });
  });
}

function signInPromise(user) {
  return new Promise((resolve, reject) => {
    fetch("/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then((user) => {
          resolve(user);
        });
      } else {
        return res.json().then((user) => {
          alert(user.error);
        });
      }
    });
  });
}

async function getCookies(ev) {
  ev.preventDefault();

  const response = await axios.get("/getCookie");
  const data = response.data;
  const root = document.querySelector("#root");
  root.innerHTML = `<p>Hello ${data}, welcome`;
}
