//log information

async function handleRegister(event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const password = event.target.elements.password.value;

  const newUser = {
    name: name,
    password: password,
  };
  axios.post( `/signUp`,{newUser},{"Content-Type": "application/json",})
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });

  event.target.reset();
}




async function handelLogIn(event) {

    event.preventDefault();

    //inputs
    const inputName = document.querySelector('.nameLogIn').value
    const inputPassword = document.querySelector('.passwordLogIn').value

    const user = {
        email: inputName,
        password: inputPassword,
    }

    const response = await enterLoginPromise(user)

    alert(response.ok)
    window.location.href = 'page2.html'

}
