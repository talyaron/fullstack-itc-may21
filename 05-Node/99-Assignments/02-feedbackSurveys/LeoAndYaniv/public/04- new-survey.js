//Get the UUID from the URL
const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.searchParams.get("uuid");

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
           console.log(questions);
            renderQuestions(questions.data.surveys);
        }
    } catch (error) {
        console.error(error);
    }
};

/* //Get all the questions to show from this survey:
async function getAllQuestions() {
    try {
        const questionsFromSurvey = await axios.get(`/surveys/getQuestions/${uuid}`);
        renderQuestions(questionsFromSurvey.data.survey.questions);
    } catch (error) {
        console.log(error);
    }
}; */