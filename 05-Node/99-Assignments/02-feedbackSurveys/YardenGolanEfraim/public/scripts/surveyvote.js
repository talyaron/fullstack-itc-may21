const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


async function surveyToAnswer() {
    try {
        const title = document.getElementById("survey-title")
        const userName = document.getElementById("user-welcome-healdine")

        await axios.get(`/surveys/surveyToAnswer?id=${params.surveyId}`)
            .then((res) => {
                title.innerHTML = res.data[0].title
                renderSurveyToBeVoted(res.data[0])
            })
        await axios.get('/votes')
            .then((res) => userName.innerText = (`Hi, ${res.data.name}.`))
    } catch (e) {
        console.error(e)
    }
}
window.addEventListener("load", surveyToAnswer())

function renderSurveyToBeVoted(survey) {
    try {
        const questionHolder = document.querySelector(".questions-wrapper")
        let html = ''
        survey.questions.map((question, index) => {
            html +=
                `<div class="question">
            <p class="question__title">${question.title}</p>
            <div class="input-wrapper">
                <label class="question__explanation" for="range">1 - Not at all; 5 - Absolutely</label> <br>
                <input type="range" name="range${index}" id="range" min="1" max="5">
            </div>
        </div>`
        })
        questionHolder.innerHTML = html
    } catch (e) {
        console.error(e)
    }
}
async function handleSubmit(event) {
    event.preventDefault()
    try {
        let numberOfQuestion = 0
        let votersID = ''
        await axios.get(`/surveys/surveyToAnswer?id=${params.surveyId}`)
            .then((res) => {
                numberOfQuestion = res.data[0].questions.length
            })
        await axios.get('/votes')
            .then((res) => votersID = (res.data.email))
        let votes = []
        for (i = 0; i < numberOfQuestion; i++) {
            votes.push(parseInt(event.target.elements[i].value))
        }
        const result = await axios.post('/votes', {
                ID: params.surveyId,
                votes: votes,
                votersID: votersID
            })
            .then((res) => {
                console.log(res.data)
                if (res.data === "already voted!") {
                    alert(`already voted!`)
                } else {
                    alert(`voted succesfully!`)
                    const form = document.querySelector(".form-question")
                    form.style.display = "none"
                    const thanks = document.querySelector(".thanks")
                    thanks.style.display = "block"
                }
            })

        event.target.reset();

    } catch (e) {
        console.error(e)
    }
}
document.querySelector(".form-question").addEventListener("submit", handleSubmit)