let adminUser = {}
    async function getAdminUser() {
        const nameDisplay = document.querySelector("h1")
        adminUser = await axios.get('/selectedAdminUser')
        await console.log(adminUser.data[0])
        nameDisplay.innerText = await adminUser.data.name
        await renderArrayToDom(adminUser.data.createdSurvey)

    }
    window.addEventListener("load", getAdminUser())

    async function handleSurvey(event) {
        event.preventDefault()
        const surveyName = event.target.elements.survey.value;
        const result = await axios.post('/addSurvey', {
            surveyName: surveyName,
            adminEmail: adminUser.data.email
        })
        await console.log(result)
        await renderArrayToDom(result.data.createdSurvey)
        event.target.reset();

    }

    function addQuestions(ID) {
        const modal = document.querySelector(`.myModal`);
        modal.innerHTML = `<div id="myModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                 <form onsubmit="handleQuestions(event)">
                                     <div id="question-holder">
                                        <input type="text" name="${ID}" id="${ID}" placeholder="Question" required>
                                    </div>
                                    <button id="addQuestion" onclick="addAnotherQuestion()">Add Question</button>
                                    <button id="submit" type="submit">Submit Questions!</button>
                                </form>
                            </div>
                        </div> `
        const modalDisplay = document.getElementById("myModal")


        // Get the <span> element that closes the modal
        // const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        
            modalDisplay.style.display = "block";
        

        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function () {
        //     modal.style.display = "none";
        // }

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }}
    }
        let questionIDCounter = 1

    async function handleQuestions(event){
        event.preventDefault()
        console.log(event.target.elements[0].id)
       
        let questions = []
        for(i = 0; i<questionIDCounter; i++){
            questions.push(event.target.elements[i].value)
        }
        const surveyID = event.target.elements[0].id
        console.log(questions)
        const result = await axios.post('/postQuestions', {
                        questions: questions,
                        surveyID: surveyID
                    })
                await console.log(result)
                questionIDCounter = 1
                event.target.reset();
                const modalDisplay = document.getElementById("myModal")
                modalDisplay.style.display = "none"
    }

    function addAnotherQuestion(){
        const questionHolder = document.getElementById("question-holder")
        questionHolder.innerHTML += `<input type="text" name="question${questionIDCounter}" placeholder="question" required>`
        questionIDCounter ++
    }
    

    function renderArrayToDom(surveyArray) {
        try {
            const list = document.querySelector(".holder")
            let html = ''

            surveyArray.forEach((survey) => {

                html += (
                    `<div class="holder__survey" onclick='addQuestions("${survey.surveyID}")' id='${survey.surveyID}'>
                          
                        <div class="holder__survey__header">Survey:</div>
                        <div class="holder__survey__taskDisplay">${survey.title}</div>
                        <div class="button button--delete" onclick='deleteSurvey("${survey.surveyID}")'>DELETE</div>
                    </div>`
                )

            })
            list.innerHTML = html

        } catch (e) {
            console.error(e)
        }
    }