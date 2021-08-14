//Get the UUID from the URL
const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.searchParams.get("uuid");

async function getUserDetailsFromCookie() {
    const userDetails = await axios.get('/user/info');
    const { username } = userDetails.data;
    renderUserDetails(username);
};

function renderUserDetails(username) {
    const loggedUser = document.querySelector('#nameUser');
    const toRender = `<h1><span class="nameUser__title">${username}</span> lets create an amazing survey!</h1>`
    loggedUser.innerHTML = toRender;
};

const createQuestion = document.querySelector('#question-form');
createQuestion.addEventListener('submit', addNewQuestion);

async function addNewQuestion(ev) {
    try {
        ev.preventDefault();
        let { question } = ev.target.elements;
        question = question.value;
        if (!question)
            throw new Error("Please type a question");
        modalUpload.style.display = "none";
        ev.target.reset();

        const questionsCreated = await axios.post(`/surveys/createQuestion/${uuid}`, { question });
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
        <button class="buttonEdit" onclick="editQuestion('${question.uuid}','${question.content}')">Edit</button>
        </div>`
    });

    root.innerHTML = html;
};

function editQuestion(qUuid , question ) {
    try {
        if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
        modalEdit.style.display = "block";
        modalEdit.classList.add("showModal");
        
        const formEdit = document.querySelector("#formEdit");
        if (!formEdit) throw new Error('There is a problem finding form from HTML');
        let html = `
        <div id="modalToEdit">
        <h3>Edit question</h3>

        <div class="form__wrapper">
            <input type="text" id="questionContent" value="${question}" required>
            <button class="form__submit--newuser" id="updateQuestion" onclick="handleEdit('${qUuid}')">Update question</button>
        </div>
        <div>`
        formEdit.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
};



//Handle Edit
async function handleEdit(qUuid) {
    try {
        let questionContent = document.querySelector('#questionContent');
        questionContent = questionContent.value;
        
        if (!questionContent)
            throw new Error("You need to complete all the fields");

        if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
        modalEdit.style.display = "none";
    
        const questionsEdited = await axios.put(`/surveys/editQuestion/${qUuid}/${uuid}`, { questionContent });
        renderQuestions(questionsEdited.data.survey.questions);
    } catch (error) {
        console.error(error);
    };
};

//Delete a question:
async function deleteQuestion(qUuid) {
    try {
        const option = confirm(`Are you sure do you want to delete this question?`);
        if (option) {
            //qUuid: Is the ID from the question and uuid is the ID from the survey
            const questions = await axios.delete(`/surveys/deleteQuestion/${qUuid}/${uuid}`);
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
            const userDetails = await axios.delete(`/surveys/deleteSurvey/${uuid}`);
            console.log(userDetails);
            location.href = `03- surveys.html?email=${userDetails.data.userDetails}`;
        }
    } catch (error) {
        console.error(error);
    }
};

//When the user click on the button "Upload the survey" is going to create the survay and save it in the "survey.json"
const uploadSurvey = document.querySelector("#new-survey");
uploadSurvey.addEventListener('submit', uploadTheSurvey);

async function uploadTheSurvey(ev) {
    try {
        ev.preventDefault();
        let { surveyTitle } = ev.target.elements;
        surveyTitle = surveyTitle.value
        if (!surveyTitle) throw new Error("Please type a title for the survey");
        ev.target.reset();

        //UUID is the id from the survey
        const userDetails = await axios.post(`/user/uploadUserWithSurvey/${uuid}`, { surveyTitle });
        location.href = `03- surveys.html?email=${userDetails.data.userDetails}`;
    } catch (error) {
        console.error(error);
    }
};

const backToSurveysBtn = document.querySelector('#to-surveys');
backToSurveysBtn.addEventListener('click', backToSurveys);

async function backToSurveys() {
    try {
        const userDetails = await axios.get(`/user/info`);
        location.href = `03- surveys.html?email=${userDetails.data.email}`;
    } catch (error) {
        console.error(error);
    }
};
