const signUp = (event) => {
  event.preventDefault();
  let { name, email, password } = event.target.elements;
  name = name.value;
  email = email.value;
  password = password.value;
  axios
    .post(
      `/signUp`,
      { name, email, password },
      { "Content-Type": "application/json" }
    )
    .then(({ data }) =>  data)
    .catch((err) => {
      console.log(err);
    });
  event.target.reset();
  window.location.href = "login.html";
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

const logIn = (event) => {
  event.preventDefault();
  let { name, email, password } = event.target.elements;
  name = name.value;
  email = email.value;
  password = password.value;
  axios
    .post(
      `/login`,
      { name, email, password },
      { "Content-Type": "application/json" }
    )
    .then(({ data }) => pepe(data))
    .catch((err) => {
      console.log(err);
    });
  event.target.reset();
 
};


 function pepe(ev) {

  ev.preventDefault()

axios.get('/getUser')
  const data = response.data

  const root = document.querySelector('#root')
  root.innerHTML = `<p>Hello ${data.name}`

}
// function renderUser(data) {
//   let html = "";
//   data.forEach((user) => {
//     html += `
     
  
               
//       <p>${user.name}</p>
      
//      `;
//   });

//   document.getElementById("root").innerHTML = html;
// }

// async function getUser() {
//     const getTask = await fetch(`/getUser`, { method: "get" });
//     const add = await getTask.json();
//     renderTask(add);
//   }

//   getUser();
