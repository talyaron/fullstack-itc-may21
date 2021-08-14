let idSelected = [];
// GET SURVAYS
async function getSurv(){
    const getSurv = await axios(`/survey/getSurvey`);
    const selected = getSurv.data
    // const idSurv = selected.id;
    renderSurvey(selected);
    renderForm(selected)
    // idSelected.push(idSurv)
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
    let htmlQuestions = "";
    arrPregs.forEach((preg) => {
        htmlQuestions += `<p>${preg}</p>`
       })
    rootQuestions.innerHTML = htmlQuestions;
  }  

function renderForm(survey){
    const root = document.querySelector(".form_title");
    const rootQuestions = document.querySelector(".form_questions");
    let html = "";
    html += `<input type="text" class="titleInput" placeholder="${survey.title}">`;
    root.innerHTML = html;

    const preguntas = survey.question;
    const arrPregs = Object.values(preguntas);
    let htmlQuestions = "";
    arrPregs.forEach((preg) => {
        htmlQuestions += `<input type="text" placeholder="${preg}">`
       })
    rootQuestions.insertAdjacentHTML("afterbegin",htmlQuestions);
}

function submitForm(e){
    e.preventDefault();
}
function getModal(){
    const arrQuestions = [];
    const titleInput = document.querySelector(".titleInput");
    const rootQuestions = document.querySelector(".form_questions");

    const title = titleInput.value;
    const length = rootQuestions.children.length;
    for (let i = 0; i < length; i++) {
          const questions = rootQuestions.children[i].value;
          arrQuestions.push(questions);
      }    
      const editSurv = {
        // "id": idSelected,
        "title": title,
        "question": {...arrQuestions}
    }
    console.log(editSurv);
    editSurvey(editSurv);
}

async function editSurvey(editSurv){
    const response = await axios.post('/survey/editSurvey', editSurv);
    window.location.reload();
    getSurv();
}
const subBtn = document.querySelector('#subBtn');
subBtn.addEventListener('click', getModal);