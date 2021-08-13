//Get the UUID from the URL
const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.searchParams.get("uuid");

const root = document.querySelector('#nameUser');

async function getUserInfoFromCookie() {
    const userInfo = await axios.get('/user/info');
    const { email, username } = userInfo.data.cookie;
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
        const questionsCreated = await axios.post(`/surveys/create/${uuid}`, { question });
        renderQuestions(questionsCreated.data.survey.questions);
    } catch (error) {
        console.error(error);
    }
};

//Function to render the data of the questions in the DOM
function renderQuestions(questions) {
    const root = document.querySelector("#root")
    let html = "";
    questions.forEach(question => {
        html += ` <div><h3>${question.content}</h3>
        <button onclick="deleteQuestion('${question.uuid}')">Delete</button>
        <button onclick="handleEdit('${question.uuid}')">Edit</button>
        </div>`
    })
    root.innerHTML = html;
};

//Delete a question:
async function deleteQuestion(id) {
    try {
        const option = confirm(`Are you sure do you want to delete this question?`);
        if (option) {
            //id: Is the ID from the question and UUID is the id from the survey
            const questions = await axios.delete(`/surveys/deleteQuestion/${id}/${uuid}`);
            renderQuestions(questions.data.survey.questions);
        }
    } catch (error) {
        console.error(error);
    }
};

//When the user click on the button "Cancel and go back" is going to cancel all the survey
const cancelSurvey = document.querySelector("#buttonCancel");
cancelSurvey.addEventListener('click', cancelTheSurvey);

async function cancelTheSurvey() {
    try {
        const option = confirm(`Are you sure do you want to cancel all the survey, you will lose all the data created here?`);
        if (option) {
            //UUID is the id from the survey
            const userInfo = await axios.delete(`/surveys/deleteSurvey/${uuid}`);
            location.href = `03- surveys.html?email=${userInfo.data.userInfo}`;
        }
    } catch (error) {
        console.error(error);
    }
};

//When the user click on the button "Upload the survey" is going to create the survay and save it in the "survey.json"
const uploadSurvey = document.querySelector("#buttonUpload");
uploadSurvey.addEventListener('click', uploadTheSurvey);

async function uploadTheSurvey() {
    try {
        const inputSurvey = document.querySelector('#surveyTitle');
        const surveyTitle = inputSurvey.value;
        //UUID is the id from the survey
        const userInfo = await axios.post(`/user/uploadUserWithSurvey/${uuid}`, { surveyTitle });
        location.href = `03- surveys.html?email=${userInfo.data.userInfo}`;
    } catch (error) {
        console.error(error);
    }
};