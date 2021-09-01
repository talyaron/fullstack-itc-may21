function handleRegister(){
    try{
    const nameDiv = document.querySelector('.form__user');
    const emailDiv = document.querySelector('.form__email');
    const passDiv = document.querySelector('.form__password');
    const colorDiv = document.querySelector('.form__color');


    const name = nameDiv.children[0].value;
    const email = emailDiv.children[0].value;
    const password = passDiv.children[0].value;;
    const color = colorDiv.children[0].value;;
    console.log(name, email, password, color);
    const newUser = {name, email, password, color};
    
    register(newUser)
    }catch(e) {
        console.error(e)
    }
}

// QUERY SELECTORS
const btnSub = document.querySelector('.btn-submit');
// EVENTLISTENERS
btnSub.addEventListener('click', handleRegister);


async function register(newUser){
    try{
       await axios.post('/user/register', newUser);
        console.log(response)
        if (response.data) {
            // window.location.href = "http://localhost:3000/index.html";
            console.log('registrado')
        }  
    }catch(error){
        console.log(error.response);
    }
}
