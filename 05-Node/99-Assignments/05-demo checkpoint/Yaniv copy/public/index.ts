async function welcome() {
    try {
    const userWelcome: any = await axios.get(`/user/welcome`);
    const { isAdmin, storeUuid, h1Text, message } = userWelcome.data;
    const h1: HTMLElement = document.querySelector('.header__item--h1');
    h1.innerHTML = h1Text;
    swal({
        title: `"${h1Text}"`,
        text: message,
        button: "Great, lets go!",
    }).then(() => {
        window.location.href = './all-users.html';
    });

    } catch (error) {
        console.error(error.message);
    }
}

welcome();

const loginForm: HTMLFormElement = document.querySelector('#login-form');

loginForm.addEventListener('submit',login);

async function login(ev) {
    try {
        ev.preventDefault();

        let {email, password} = ev.target.elements;
        email = email.value;
        password = password.value;

        ev.target.reset();
        
        const loginUser = await axios.post('/user/login', { email, password, registerOrLogin: 'login' });
        const { title, text } = loginUser.data;
        
        swal({
            title: title,
            text: text,
            icon: "success",
            button: "Lets go",
        })
        .then( () => { window.location.href = './all-users.html'; });

    } catch (error) {
        console.error(error.message);
    }
}