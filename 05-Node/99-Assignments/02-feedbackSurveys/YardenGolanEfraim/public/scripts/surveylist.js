 async function getAdminUser() {
     try {
        const nameDisplay = document.querySelector("h1")
        const adminUser = await axios.get('/admin')
        nameDisplay.innerText = await adminUser.data.name
        renderArrayToDom(adminUser.data.createdSurvey)

    }catch (e) {
        console.error(e)
    }}
    window.addEventListener("load", getAdminUser())

    async function handleSurvey(event) {
        event.preventDefault()
        try {
        const surveyName = event.target.elements.survey.value;
        const adminUser = await axios.get('/admin')
        const result = await axios.post('/surveys/addSurvey', {
            surveyName: surveyName,
            adminEmail: adminUser.data.email
        })
        await renderArrayToDom(result.data.createdSurvey)
        event.target.reset();

    }catch (e) {
        console.error(e)
    }}
    document.querySelector(".form-field").addEventListener("submit", handleSurvey)

    
    

    function renderArrayToDom(surveyArray) {
        try {
            const list = document.querySelector(".holder")
            let html = ''

            surveyArray.forEach((survey) => {

                html += (
                    `<div class="holder__survey" onclick='moveToSurveyEdit("${survey.surveyID}")' id='${survey.surveyID}'>
                        <div class="holder__survey__header center-me">Survey:</div>
                        <br>
                        <div class="holder__survey__taskDisplay">${survey.title}</div>
                    </div>
                    <div class="holder__delete" onclick='deleteSurvey("${survey.surveyID}")'>Delete</div>`
                )

            })
            list.innerHTML = html

        } catch (e) {
            console.error(e)
        }
    }
    function deleteSurvey(ID){
        try {
        axios.delete(`/surveys/deleteSurvey/${ID}`)
        .then((res) => {
            renderArrayToDom(res.data.createdSurvey)
        })
    }catch (e) {
        console.error(e)
    }}

    function moveToSurveyEdit(surveyID){
        try {
        axios.get(`/surveys/sendSurvey?id=${surveyID}`)
        window.location.href="/surveyedit.html";
    }catch (e) {
        console.error(e)
    }}