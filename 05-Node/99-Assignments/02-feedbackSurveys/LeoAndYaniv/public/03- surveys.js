const root = document.querySelector('#nameUser');

async function getUserInfoFromCookie() {
    const userInfo = await axios.get('/register/info');
    const { username, email } = userInfo.data.cookie;
    renderuserInfo(username);
    bringSurveysToShow(email);
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

//Function to render all the surveys from the user that is login
async function bringSurveysToShow(emailLogin) {
    const bringSurveys = await axios.get(`/surveys/getSurveys/${emailLogin}`);
    const root = document.querySelector('#root');
    let html = "";
    bringSurveys.data.surveys.forEach(survey => {
        html += ` <div class="showSurvey">
                    <button class="showSurvey__title" onclick=showSurveyInfo("${survey.uuid}")>${survey.title}</button>
                </div>`
    })
    root.innerHTML = html;
};

//Function when you click on a Survey you will redirect to other page to see all the information of it
function showSurveyInfo(surveyId){
    window.location.href = `./05- view-survey.html?uuid=${surveyId}`;
}
