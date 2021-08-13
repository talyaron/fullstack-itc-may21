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
    const toRender = `<h1>Ready to answer the survey, <span class="nameUser__title">${username}</span>?</h1>`
    loggedUser.innerHTML = toRender;
    renderSurveyInfo();
};

//Function to render the data of a survey in the DOM
async function renderSurveyInfo() {
    const root = document.querySelector("#root");
    const questionsCreated = await axios.get(`/surveys/getQuestions/${uuid}`);
    let html = "";
    questionsCreated.data.survey.questions.forEach(question => {
        html += `<div>
        <h3>${question.content}</h3>
        <form class="votation">
            <p class="raitings">
                <input id="${question.uuid}" type="radio" name="raiting" value="5">
                <label for="${question.uuid}">★</label>
                
                <input id="${question.uuid}" type="radio" name="raiting" value="4">
                <label for="${question.uuid}">★</label>
                
                <input id="${question.uuid}" type="radio" name="raiting" value="3">
                <label for="${question.uuid}">★</label>
                
                <input id="${question.uuid}" type="radio" name="raiting" value="2">
                <label for="${question.uuid}">★</label>
                
                <input id="${question.uuid}" type="radio" name="raiting" value="1">
                <label for="${question.uuid}">★</label>
            </p>
        </form>
        </div>`
    })
    root.innerHTML = html;
};

const submitAnswer = document.querySelector('#submitAnswer');
submitAnswer.addEventListener('click', answerSubmit)

function answerSubmit(){
    const votation = document.getElementsByTagName('raiting');
    let pepe = document.getElementsByName('raiting');
    console.log(pepe);
}

