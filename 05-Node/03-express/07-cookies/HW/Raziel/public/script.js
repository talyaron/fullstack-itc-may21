//log information

  async function handleRegister(event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const password = event.target.elements.password.value;

  const newUser = {
    name: name,
    password: password,
  };
console.log(newUser);
  const response = await registerPromise(newUser)

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
  console.log(user);
   const response = await signInPromise(user);
  alert( response.data);
  window.location.href = "page2.html";
}




async function registerPromise(newUser) {

const response = await axios.post('/signUp',newUser);
console.log(response.data);
return response.data;

 }


 async function signInPromise(user) {

  const response = await axios.post('/loginUser',user);
  return response.data;
   }
  
   async function getCookies(ev) {

    ev.preventDefault()

    const response = await axios.get('//userInfo')
    const { name } = response.data;


    const rootMessage = document.querySelector('#root')
    rootMessage.innerHTML = `<p>Hello ${name} </p>`

    
}



   