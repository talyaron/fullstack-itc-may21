//Get the UUID from the URL
const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.search.substring(1);

//Handle the form to login an existing user:
const handleFormCreate = document.querySelector("#existingForm");
handleFormCreate.addEventListener('submit', doingSubmitLogin);

async function doingSubmitLogin(ev) {
    try {
        const errorMessage = document.querySelector('#errorMessage');
        if (!errorMessage) throw new Error('There is a problem finding the container for the error message')
        ev.preventDefault();
        let { username, email } = ev.target.elements
        username = username.value;
        email = email.value;
        if (!username || !email) throw new Error("Please complete all the fields");
        ev.target.reset();
        const userDetails = { username, email }

        if (userDetails) {
            await axios.post('/user/answerLoginBefore', userDetails);
            location.href = `07- answer-survey.html?uuid=${uuid}`;
        } else {
            throw new Error('Some of the fields are wrong, please try again!')
        }
    } catch (error) {
        console.error(error);
        errorMessage.innerHTML = error;
    }
};