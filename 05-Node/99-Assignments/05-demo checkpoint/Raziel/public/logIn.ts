const handelLogIn = document.querySelector("#loginForm");
handelLogIn.addEventListener("submit", handelLoggingIn);

async function handelLoggingIn(event) {

    try {
        event.preventDefault();
        let { email, password } = event.target.elements;
        email = email.value;
        password = password.value;

        const userLogin = { email, password };


        const logedInuser = await axios.post('/users/login', userLogin);
        console.log(logedInuser);
        window.location.href = 'userPage.html'

        event.target.reset();
    } catch (error) {
        console.error(error);

    }
}
