const form = document.querySelector('#form') as HTMLFormElement;

form.onsubmit = handleLogIn

async function handleLogIn(ev) {
    ev.preventDefault();
    let { email, password } = ev.target.elements;

    email = email.value;
    password = password.value;

    const user = {
        email: email,
        password: password,
    }

    await login(user)
}

/* NPM */

async function login(user) {
    try {
        const res = await axios.post('/users/login', user)
        if (res.data.token) {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            window.location.href = 'http://localhost:8000/todosPage.html';
          }
      
    } catch (e) {
        console.log(e.response)
    }
}