const handelReg = document.querySelector('#registerForm');

handelReg.addEventListener('submit', handelRegistration);
async function handelRegistration(event) {

  try {
    event.preventDefault();
    let { name, email, password, color, img } = event.target.elements;
    name = name.value;
    email = email.value;
    password = password
    color = color.value;
    img = img.value;


    if (!name || !email || !password) throw new Error("Please complete all the fields");




    const registerUser = { name, email, password, color, img };

    const createdUser = await axios.post('/users/register', registerUser);
    console.log(createdUser);

    event.target.reset();
  } catch (error) {
    console.error(error);

  }
}