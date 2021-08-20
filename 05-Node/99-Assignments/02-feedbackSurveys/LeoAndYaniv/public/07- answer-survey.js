async function getUserDetailsFromCookie() {
    const userDetails = await axios.get('/user/info');
    const { username } = userDetails.data;
    renderUserDetails(username);
};

function renderUserDetails(username) {
    const loggedUser = document.querySelector('#nameUser');
    const toRender = `<h1>Ready to answer the survey, <span class="nameUser__title">${username}</span>?</h1>`
    loggedUser.innerHTML = toRender;
    renderSurveyInfo();
};

//Function to render the data of a survey in the DOM
async function renderSurveyInfo() {
    const root = document.querySelector("#root");
    const questionsCreated = await axios.get(`/surveys/questions/${uuid}`);
    
    const title = document.querySelector("#title");
    title.innerHTML = `<h2 class="survey__title">${questionsCreated.data.survey.title}</h2>
    <div class="button__share"><i class="fas fa-share-alt-square" id="Element${uuid}" onclick='copyTextFromElement()'></i></div>`;

    let html = "";
    questionsCreated.data.survey.questions.forEach(question => {
        html += `<div class="survey__questions submit" id="${question.uuid}">
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
    root.insertAdjacentHTML("afterbegin",html);
};

//Handle the form to create a new user:
const handleForm = document.querySelector("#root");
handleForm.addEventListener('submit', answerSubmit);

async function answerSubmit(ev) {
    let answeredQuestions = [];
    ev.preventDefault();
    for (let index = 0; index < ev.target.elements.length; index++) {
        const element = ev.target.elements[index];
        if (element.checked) {
            element.id = element.id.substring(0, element.id.length - 1);
            const answeredQuestion = {questionId: element.id, rating: Number(element.value)};
            answeredQuestions.push(answeredQuestion);
        }
    }
    const submitAnswers = await axios.post(`/user/answerLoginAfter/${uuid}`);
    if (!submitAnswers.data.filledAlready) {
        await axios.put(`/surveys/questions/${uuid}`, answeredQuestions);
    }

    alert(submitAnswers.data.message);
    location.href = `http://localhost:3000/06-%20answer-login.html?${uuid}`;
}