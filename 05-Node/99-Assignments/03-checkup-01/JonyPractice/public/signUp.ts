const form = document.querySelector('#form') as HTMLFormElement

form.onsubmit = handleNewUser


async function handleNewUser(ev) {
    ev.preventDefault()

    let { username, email, password, repassword } = ev.target.elements

    username = username.value
    email = email.value
    password = password.value
    repassword = repassword.value

    const newUser = {
        userName:username,
        email:email,
        password:password,
        repassword:repassword,
    }

    
    await signUserUp(newUser)
}

/* NPM */

async function signUserUp(newUser) {
    try{
        const response = await axios.post('/users/register', newUser)
        const message = response.data
        if (message) {
            window.location.href = "http://localhost:8000/login.html";
          }
    }catch(e){
        alert(e.message)
    }
}