const signUp = (event) => {
  event.preventDefault();
  let { name, email, password } = event.target.elements;
  name = name.value;
  email = email.value;
  password = password.value;
  axios.post( `/signUp`,{name,email,password},{"Content-Type": "application/json",})
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });

  event.target.reset();
  //   let { name, email, password } = event.target.elements;
  //   name = name.value;
  //   email = email.value;
  //   password = password.value;

  //   const registerUser = await fetch("/signUp", {
  //     method: "POST",

  //   });
  //   const register = await registerUser.json()
  //   console.log(register);
  //!PREGUNTAR PORQUE NO FUNCIONO CON ASYNC AWAIT
};
