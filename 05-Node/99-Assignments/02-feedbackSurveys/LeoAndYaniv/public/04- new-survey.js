const root = document.querySelector('#nameUser');

async function getUserInfoFromCookie() {
    const userInfo = await axios.get('/register/info');
    const { email, username } = userInfo.data.cookie;
    console.log(email, username);
    renderuserInfo(username);
};

function renderuserInfo(username) {
    const toRender = `<h1><span class="nameUser__title">${username}</span> lets create an amazing survey!</h1>`
    root.innerHTML = toRender;
};

const createQuestion = document.querySelector('#create');
createQuestion.addEventListener('submit', addNewQuestion);

async function addNewQuestion(ev) {
    try {
        ev.preventDefault();
        let { question } = ev.target.elements;
        question = question.value
        if (!question)
            throw new Error("Please type a question");
        modalCreate.style.display = "none";
        ev.target.reset();
        //Get the UUID from the URL
        const url_string = window.location.href;
        const url = new URL(url_string);
        const uuid = url.searchParams.get("uuid");
        const questionsCreated = await axios.post(`/surveys/create/${uuid}`, {question});
    } catch (error) {
        console.error(error);
    }
};