//Handle the form to create a new user:
const handleFormCreate = document.querySelector("#form");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

async function doingSubmitCreate(ev) {
    try {
        ev.preventDefault();
        let { username, email, password } = ev.target.elements
        username = username.value;
        email = email.value;
        password = password.value;
        if (!username || !email || !password)
            throw new Error("Please complete all the fields");
        ev.target.reset();

        await axios.post('/register', { username, email, password });

    } catch (error) {
        console.error(error);
    }
};