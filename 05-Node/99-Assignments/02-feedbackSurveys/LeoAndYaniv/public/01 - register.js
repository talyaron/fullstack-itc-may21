//Handle the form to create a new user:
const handleFormCreate = document.querySelector("#createForm");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

async function doingSubmitCreate(ev) {
    try {
        const errorMessage = document.querySelector('#errorMessage');
        if (!errorMessage) throw new Error('There is a problem findind the container for the error message')
        ev.preventDefault();
        let { username, email, password } = ev.target.elements
        username = username.value;
        email = email.value;
        password = password.value;
        if (!username || !email || !password) throw new Error("Please complete all the fields");
        ev.target.reset();
        const userInfo = { username, email, password };
        const userCreated = await axios.post('/user/create', userInfo);
        if (userCreated.data.user != null) {
            location.href = `03- surveys.html?email=${userCreated.data.user.email}`;
        } else {
            errorMessage.innerHTML = userCreated.data.message;
        }
    } catch (error) {
        console.error(error);
        errorMessage.innerHTML = error;
    }
};