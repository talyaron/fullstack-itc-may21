const root = document.querySelector('#nameUser');

async function renderUserDetails() {
    const userDetails = await axios.get('/user/info');
    const { username } = userDetails.data;
    const toRender = `<h1>Welcome <span class="nameUser__title">${username}</span></h1>`
    root.innerHTML = toRender;
};

const redirectButton = document.querySelector('#redirect');
redirectButton.addEventListener('click', createSurvey);

async function createSurvey() {
    try {
        const idSurveyCreated = await axios.post(`/surveys/survey/new`);
        window.location.href = `./04- new-survey.html?uuid=${idSurveyCreated.data.survey.uuid}`;

        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
};

//Function to render all the surveys from the user that is login
async function getSurveysToShow() {
    const surveysToShow = await axios.get(`/surveys/survey/all`);
    const root = document.querySelector('#root');
    let html = "";
    const { surveys } = surveysToShow.data;
    surveys.forEach(survey => {
        html += ` <div class="showSurvey">
    <button class="showSurvey__title title--modify" onclick=showSurvey("${survey.uuid}")>${survey.title} <span class="nameUser__title">Answers: ${survey.questions[0].ratings.length} </span></button> 
                    <i class="fas fa-share-alt-square button__survey" id="Element${survey.uuid}" onclick='copyTextFromElement("${survey.uuid}")'></i>
                </div>`
    })
    root.innerHTML = html;
};

//Function when you click on a Survey you will redirect to other page to see all the information of it
function showSurvey(surveyId){
    window.location.href = `./05- view-survey.html?uuid=${surveyId}`;
}

//Function to copy the path
function copyTextFromElement(surveyUuid) {
  try {
    const sharableSurveyLink = `http://localhost:3000/06-%20answer-login.html?${surveyUuid}`;
    //Copy the text to the clipboard
    const successful = navigator.clipboard.writeText(sharableSurveyLink);

    const buttonCopy = document.querySelector(`#Element${surveyUuid}`);
    if (successful) buttonCopy.innerHTML = "Link copied to clipboard!";
    else buttonCopy.innerHTML = "Unable to copy!";
  } catch (error) {
    console.error(error);
  }
}