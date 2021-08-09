//Handle the form to create a new user:
const handleFormCreate = document.querySelector("#create");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

async function doingSubmitCreate(ev) {
    try {
        ev.preventDefault();
        let { namePerson, newEmail, newPassword } = ev.target.elements
        nameUser = namePerson.value;
        email = newEmail.value;
        password = newPassword.value;
        if (!nameUser || !email || !password)
            throw new Error("Please complete all the fields");
        modalCreate.style.display = "none";
        ev.target.reset();

        await axios.post('/createUser', { nameUser, email, password });

    } catch (error) {
        console.error(error);
    }
};

//Handle the form to login a user:
const handleFormLogin = document.querySelector("#login");
handleFormLogin.addEventListener('submit', doingSubmitLogin);

async function doingSubmitLogin(ev) {
    try {
        const errorMessage = document.querySelector('#errorMessage');
        if (!errorMessage) throw new Error('There is a problem findind the container for the error message')
        ev.preventDefault();
        let { email, password } = ev.target.elements
        email = email.value;
        password = password.value;
        if (!email || !password)
            throw new Error("Please complete all the fields");
        ev.target.reset();

        const userInfo = await axios.post('/login', { email, password });
        if (userInfo.data.userInfo != null) {
            location.href = "second.html";
        } else {
            errorMessage.innerHTML = userInfo.data.message;
        }

    } catch (error) {
        console.error(error);
        errorMessage.innerHTML = error;
    }
};