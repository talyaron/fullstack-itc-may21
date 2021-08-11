const addQuest = document.getElementById('addQuest');
const rootQuestions = document.getElementById('rootQuestions');

const subBtn = document.getElementById('subBtn');


subBtn.addEventListener('click',addSurvey)

let cont = 0;

const localJson = () => {
    const fileJson = fs.readFileSync("./db/suvery.json");
    return JSON.parse(fileJson);
  };


 function addSurvey(){

    const questionForm = document.getElementById('questionForm');
    
    const arrayChildrens = []

    const length = questionForm.children.length;

     for (let i = 0; i < length; i++) {
        arrayChildrens.push(questionForm.children[i].children[0].value)   
     }

     console.log(arrayChildrens)
 }





  const dispayFormQuestions = () => {

   
    const questionForm = document.getElementById('questionForm');
    
    const arrayChildrens = []



    let html = "";

    html = `<div> 
                <input type="text" name="question" id="question${cont}" placeholder="Make your question...">
            </div`

    questionForm.insertAdjacentHTML("beforeend",html);
    cont++;
    
    
}

addQuest.addEventListener('click', dispayFormQuestions);


const addInputQuestion = () => {
    const child = document.createElement('input');
    child.setAttribute('type', 'text');
    child.setAttribute('name', )
}

// function handleSuv(e){
//     e.preventDefault();
//     const title = e.target.elements.suvName.value;
//     const question = e.target.elements.question.value;   
//     const firstAns = e.target.elements.first_ans.value;   
//     const secondAns = e.target.elements.second_ans.value;   
//     const thirdAns = e.target.elements.third_ans.value;
    
//     // dispayFormQuestions();
// }


