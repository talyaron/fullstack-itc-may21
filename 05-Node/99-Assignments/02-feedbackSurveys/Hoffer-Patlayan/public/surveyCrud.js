// // QUERYSELECTORS
// const addQuest = document.getElementById('addQuest');
// const rootQuestions = document.getElementById('rootQuestions');
// const subBtn = document.getElementById('subBtn');


    
// const arrayChildrens = []

// function addSurvey(){
    
//     const questionForm = document.getElementById('questionForm');
//     const container = document.querySelector('.container_form');

//     const arrQuestions = [];
//     const length = questionForm.children.length;
    
//     for (let i = 0; i < length; i++) {
//         const questions = questionForm.children[i].children[0].value;
//         arrQuestions.push(questions);
        
//     }    
//     const title = container.children[0].value;
//     const jsonSub = {
//         "subTitle": title,
//         'questions': {...arrQuestions}
//     }
//     arrayChildrens.push(jsonSub);   
//     console.log(arrayChildrens)
//     sendSurvey()
// }
// async function sendSurvey(){
//     const response = await axios.post('/survey/addSurvey', arrayChildrens);
//     console.log(response)
// }



// let cont = 0;
// const dispayFormQuestions = () => {   
//     const questionForm = document.getElementById('questionForm');
//     let html = "";
    
//     html = `<div> 
//     <input type="text" name="question" id="question${cont}" placeholder="Make your question...">
//     </div`
    
//     questionForm.insertAdjacentHTML("beforeend",html);
//     cont++;
// }
// // EVENT LISTENERS
// subBtn.addEventListener('click',addSurvey)
// addQuest.addEventListener('click', dispayFormQuestions);




