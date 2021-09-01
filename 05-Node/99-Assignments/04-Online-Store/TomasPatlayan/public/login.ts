 

const formLogin = document.getElementById('formLogin');
// const formCreates = document.querySelector(".formCreate");
const loginUser = async (event)=> {
    event.preventDefault();
try {


 
const email = event.target.elements.emailLogin.value;
const password = event.target.elements.passwordLogin.value;
const data = await axios.post('/user/login',{email,password});
// console.log(data.data);


 window.location.href = 'pokeStore.html'
event.target.reset();
} catch (error) {
  console.log(error);
    
}

}
formLogin.addEventListener('submit',loginUser)

// const getUser = async () => {
//   const getUser = await axios.get('/user/getUser');
// console.log(getUser);


// }
// getUser()