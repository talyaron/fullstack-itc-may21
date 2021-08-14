// GET SURVAYS
async function getSurv(){
    const getSurv = await axios(`/survey/getSurvey`);
    const selected = getSurv.data
    console.log(selected.question);
    renderSurvey(selected);
}
getSurv()

// RENDER
function renderSurvey(survey){
    const root = document.querySelector(".renderTitle");
    const rootQuestions = document.querySelector(".questions");
    let html = "";
      html +=       `<h3>${survey.title}</h3>
                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="icon_edit far fa-edit" ></i></a>
                    <h4>Questions:</h4>`;
   root.innerHTML = html;


    const preguntas = survey.question;
    const arrPregs = Object.values(preguntas);
    console.log(arrPregs);
    let htmlQuestions = "";
    arrPregs.forEach((preg) => {
        htmlQuestions += `<p>${preg}</p>`
       })
    rootQuestions.innerHTML = htmlQuestions;
  }  


