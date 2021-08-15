//Get the UUID from the URL
const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.searchParams.get("uuid");

async function getUserDetailsFromCookie() {
    const userDetails = await axios.get('/user/info');
    const { username } = userDetails.data;
    renderuserDetails(username);
};

function renderuserDetails(username) {
    const loggedUser = document.querySelector('#nameUser');
    const toRender = `<h1>Awsome survey <span class="nameUser__title">${username}</span>!</h1>`
    loggedUser.innerHTML = toRender;
    renderSurveyInfo();
};

//Function to render the data of a survey in the DOM
async function renderSurveyInfo() {
    const root = document.querySelector("#root");
    const questionsCreated = await axios.get(`/surveys/getQuestions/${uuid}`);

    const title = document.querySelector("#title");
    title.innerHTML = `<h2 class="survey__title">${questionsCreated.data.survey.title}</h2>
    <div class="button__share"><i class="fas fa-share-alt-square" id="Element${uuid}" onclick='copyTextFromElement()'></i></div>`;

    let html = "";
    questionsCreated.data.survey.questions.forEach(question => {
        html += `<div class="survey__questions">${question.content}</div>`
    })
    root.innerHTML = html;
};

//Function to copy the path
function copyTextFromElement() {
    try {
        const textWantToCopy = `http://localhost:3000/06-%20answer-login.html?${uuid}`;
        //Copy the text to the clipboard
        const successful = navigator.clipboard.writeText(textWantToCopy);

        if (successful) alert('Link copied to clipboard!');
        else buttonCopy.innerHTML = "Unable to copy!";
    } catch (error) {
        console.error(error);
    }
}