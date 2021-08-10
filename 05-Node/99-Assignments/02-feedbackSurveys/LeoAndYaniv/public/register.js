//Handle the form to create a new user:
const handleFormCreate = document.querySelector("#createForm");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

async function doingSubmitCreate(ev) {
    try {
        ev.preventDefault();
        let { username, email, password } = ev.target.elements
        username = username.value;
        email = email.value;
        password = password.value;
        if (!username || !email || !password) throw new Error("Please complete all the fields");

        await axios.post('/register/user', { username, email, password });
        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
};