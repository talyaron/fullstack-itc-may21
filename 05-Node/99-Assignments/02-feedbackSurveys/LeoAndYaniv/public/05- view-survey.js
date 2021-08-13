//Get the UUID from the URL
const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.searchParams.get("uuid");

async function getUserInfoFromCookie() {
    const userInfo = await axios.get('/user/info');
    const { username } = userInfo.data;
    renderuserInfo(username);
};

function renderuserInfo(username) {
    const loggedUser = document.querySelector('#nameUser');
    const toRender = `<h1>Awsome survey <span class="nameUser__title">${username}</span>!</h1>`
    loggedUser.innerHTML = toRender;
    renderSurveyInfo();
};

//Function to render the data of a survey in the DOM
async function renderSurveyInfo() {
    const root = document.querySelector("#root");
    const questionsCreated = await axios.get(`/surveys/getQuestions/${uuid}`);
   let html = "";
    questionsCreated.data.survey.questions.forEach(question => {
        html += `<div><h3>${question.content}</h3>
                    </div>`
    })
    root.innerHTML = html;
};