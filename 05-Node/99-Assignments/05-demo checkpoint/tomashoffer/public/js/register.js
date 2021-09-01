function handleRegister(){
    try{
    const nameDiv = document.querySelector('.form__user');
    const emailDiv = document.querySelector('.form__email');
    const passDiv = document.querySelector('.form__password');
    const colorDiv = document.querySelector('.form__color');
    const imageDiv = document.querySelector('.form__image');


    const name = nameDiv.children[0].value;
    const email = emailDiv.children[0].value;
    const password = passDiv.children[0].value;;
    const color = colorDiv.children[0].value;;
    const image = imageDiv.children[0].value;;
    console.log(name, email, password, color, image);
    const newUser = {name, email, password, color, image};
    
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
       const {data ,error} = await axios.post('/user/register', newUser);
       if(error) throw error;

        console.log(data)
        if (response.data) {
            window.location.href = "http://localhost:3000/index.html";
            console.log('registrado')
        }  
    }catch(error){
        console.error(error);
    }
}
