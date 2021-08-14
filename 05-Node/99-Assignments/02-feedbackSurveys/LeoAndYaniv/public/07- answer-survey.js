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
        html += `<div id="${question.uuid}">
        <h3>${question.content}</h3>
            <p class="raitings">
                <input id="${question.uuid}1" type="radio" name="raiting${question.uuid}" value="5">
                <label for="${question.uuid}1">★</label>
                
                <input id="${question.uuid}2" type="radio" name="raiting${question.uuid}" value="4">
                <label for="${question.uuid}2">★</label>
                
                <input id="${question.uuid}3" type="radio" name="raiting${question.uuid}" value="3">
                <label for="${question.uuid}3">★</label>
                
                <input id="${question.uuid}4" type="radio" name="raiting${question.uuid}" value="2">
                <label for="${question.uuid}4">★</label>
                
                <input id="${question.uuid}5" type="radio" name="raiting${question.uuid}" value="1">
                <label for="${question.uuid}5">★</label>
            </p>
        </div>`
    })
    root.innerHTML = html;
    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'top-menu__button'
    button.innerText = 'Submit answer';
    root.appendChild(button)
};

//Handle the form to create a new user:
const handleForm = document.querySelector("#root");
handleForm.addEventListener('submit', answerSubmit);

function answerSubmit(ev) {
    let answeredQuestions = [];
    ev.preventDefault();
    for (let index = 0; index < ev.target.elements.length; index++) {
        const element = ev.target.elements[index];
        if (element.checked === true) {
            element.id = element.id.substring(0, element.id.length - 1);
            //console.log(element.id, "pepe" ,element.value);
            const answeredQuestion = {'questionId' : element.id, 'raiting': element.value};
            answeredQuestions.push(answeredQuestion)
            
        }
    }
    console.log(answeredQuestions);
    //aca tengo que registrar al usuario y tambien registrar las respuestas a las preguntas de los otros usuarios
}