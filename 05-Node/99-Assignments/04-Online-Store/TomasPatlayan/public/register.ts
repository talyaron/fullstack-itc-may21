const form = document.getElementById('formRegister');

const registerUser = async (event)=> {
    event.preventDefault();
try {


const name = event.target.elements.userRegister.value;
const email = event.target.elements.emailRegister.value;
const password = event.target.elements.passwordRegister.value;
const data = await axios.post('/user/register',{name,email,password});
window.location.href ='login.html'
console.log(data.data);

event.target.reset();
} catch (error) {
  console.log(error);
    
}

}
form.addEventListener('submit',registerUser)


 