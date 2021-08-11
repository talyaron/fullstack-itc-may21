//Handle the form to login an existing user:
const handleFormCreate = document.querySelector("#existingForm");
handleFormCreate.addEventListener('submit', doingSubmitLogin);

async function doingSubmitLogin(ev) {
    try {
        const errorMessage = document.querySelector('#errorMessage');
        if (!errorMessage) throw new Error('There is a problem finding the container for the error message')
        ev.preventDefault();
        let { email, password } = ev.target.elements
        email = email.value;
        password = password.value;
        if (!email || !password) throw new Error("Please complete all the fields");
        ev.target.reset();
        const userInfo = { email, password }
        const userLogin = await axios.post('/register/login', userInfo);

        if (userLogin.data.userInfo != null) {
            location.href = `03- surveys.html?email=${userInfo.email}`;
        } else {
            errorMessage.innerHTML = userLogin.data.message;
        }
    } catch (error) {
        console.error(error);
        errorMessage.innerHTML = error;
    }
};