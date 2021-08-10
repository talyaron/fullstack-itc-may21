const root = document.querySelector('#nameUser');

async function getUserInfoFromCookie() {
    const userInfo = await axios.get('/register/info');
    const { username } = userInfo.data.cookie;
    renderuserInfo(username);
};

function renderuserInfo(username) {
    const toRender = `<h1>Welcome <span class="nameUser__title">${username}</span></h1>`
    root.innerHTML = toRender;
};

const redirectButton = document.querySelector('#redirect');
redirectButton.addEventListener('click', createSurvey);

async function createSurvey() {
    try {
        const url_string = window.location.href;
        const url = new URL(url_string);
        const email = url.searchParams.get("email");
        const idSurveyCreated = await axios.post(`/surveys/createSurvey/${email}`);
        window.location.href = `./04- new-survey.html?uuid=${idSurveyCreated.data.survey.uuid}`;
        
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
};