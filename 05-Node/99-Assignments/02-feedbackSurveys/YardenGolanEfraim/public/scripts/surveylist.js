async function getAdminUser() {
    const nameDisplay = document.querySelector("h1")
    const adminUser = await axios.get('/selectedAdminUser')
    await console.log(adminUser.data[0])
    nameDisplay.innerText = await adminUser.data.name
    await renderArrayToDom(adminUser.data.createdSurvey)

}
window.addEventListener("load", getAdminUser())

async function handleSurvey(event) {
    event.preventDefault()
    const surveyName = event.target.elements.survey.value;
    const adminUser = await axios.get('/selectedAdminUser')
    const result = await axios.post('/addSurvey', {
        surveyName: surveyName,
        adminEmail: adminUser.data.email
    })
    await console.log(result)
    await renderArrayToDom(result.data.createdSurvey)
    event.target.reset();

}




function renderArrayToDom(surveyArray) {
    try {
        const list = document.querySelector(".holder")
        let html = ''

        surveyArray.forEach((survey) => {

            html += (
                `<div class="holder__survey" onclick='moveToSurveyEdit("${survey.surveyID}")' id='${survey.surveyID}'>
                    <div class="holder__survey__header">Survey:</div>
                    <div class="holder__survey__taskDisplay">${survey.title}</div>
                </div>`
            )

        })
        list.innerHTML = html

    } catch (e) {
        console.error(e)
    }
}
function moveToSurveyEdit(surveyID){
    axios.get(`/sendSurvey?id=${surveyID}`)
    window.location.href="/surveyedit.html";
}