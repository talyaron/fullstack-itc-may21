function renderSurveyInfo() {
    try {
    axios.get('/surveys/getSurvey')
        .then((res) => renderSurveyEdit(res.data[0]));
}catch (e) {
    console.error(e)
}}
window.addEventListener("load", renderSurveyInfo())


function renderSurveyEdit(survey) {
    try {
    const surveyInfo = document.querySelector(".survey")
    let questionCount = survey.questions.length
    let questionHtml = ''
    for (i = 0; i < questionCount; i++) {
        let questionNumber = i + 1
        let sum = 0;

    for (let p = 0; p < survey.questions[i].voters.score.length; p++) {
        sum += survey.questions[i].voters.score[p];
        }
        questionHtml +=
            `  <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="blue" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg> Question ${questionNumber}</div>
                    <div class="questioninfo-holder">
                        <div id= "${survey.questions[i].questionID}"class= "center-me question${i}"><br><em>${survey.questions[i].title}</em></div><br>
                        <div class="averagevotes center-me">Average Score: <br> <strong>${sum/survey.questions[i].voters.score.length}</strong></div><br>
                        <div class="numberofvotes center-me">Number of Voters: <br> <strong>${survey.questions[i].voters.score.length}</strong></div>
                    </div> `
    }
    let html = `<div class="survey__ID"  id='${survey.surveyID}'>
                    <div class="survey__ID__Title">${survey.title}</div>
                    ${questionHtml}
                    <form onsubmit="handleQuestions(event)" class="my-form">
                                 <div id="question-holder">
                                    <input type="text" name="${survey.surveyID}" id="${survey.surveyID}" placeholder="Question" required>
                                </div>
                                <br>
                                <button  id="submit-btn" type="submit"><i class="fas fa-plus-square"></i>Submit Question</button>
                            </form>
                  
                        </div>
                </div>`
    surveyInfo.innerHTML = html

}catch (e) {
    console.error(e)
}}
async function handleQuestions(event) {
    event.preventDefault()
    try{
    let questions = []
    questions.push(event.target.elements[0].value)
    const surveyID = event.target.elements[0].id
    const result = await axios.post('/questions', {
        questions: questions,
        surveyID: surveyID
    })
    event.target.reset();
    await renderSurveyInfo()

}catch (e) {
    console.error(e)
}}

function copyURLtoClipboard() {
    try{
        axios.get('/surveys/getSurvey')
        .then(function(res){ 
        const surveyID = res.data[0].surveyID
        const text = `http://localhost:3000/surveyvotelogin.html?surveyId=${surveyID}`
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Survey link copied!')
    })
}catch (e) {
    console.error(e)
}}