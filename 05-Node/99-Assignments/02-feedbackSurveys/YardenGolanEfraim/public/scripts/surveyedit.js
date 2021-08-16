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
            `  <div>Question ${questionNumber}</div>
                    <div class="questioninfo-holder">
                    <div id= "${survey.questions[i].questionID}"class= "question${i}">${survey.questions[i].title}</div> 
                    <div class="averagevotes">Average Score:${sum/survey.questions[i].voters.score.length}</div>  
                    <div class="numberofvotes">Number of Voters: ${survey.questions[i].voters.score.length}</div>
                    </div> ` 
                    //YS: You could make average score into a terneray operator: ${sum/survey.questions[i].voters.score.length} !== NaN ? ${sum/survey.questions[i].voters.score.length} : 'No Average Score Yet'
    }
    let html = `<div class="survey__ID"  id='${survey.surveyID}'>
                    <div class="survey__ID__Title">${survey.title}</div>
                    ${questionHtml}
                    <form onsubmit="handleQuestions(event)">
                                 <div id="question-holder">
                                    <input type="text" name="${survey.surveyID}" id="${survey.surveyID}" placeholder="Question" required>
                                </div>
                                <button  id="submit-btn" type="submit"><i class="fas fa-plus-square"></i>>Submit Questions!</button>
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
    })
}catch (e) {
    console.error(e)
}}