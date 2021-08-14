  // QUERYSELECTORS
  const addQuest = document.getElementById('addQuest');
  const rootQuestions = document.getElementById('rootQuestions');
  const subBtn = document.getElementById('subBtn');
  
  function addSurvey(){
      
      const questionForm = document.getElementById('questionForm');
      const container = document.querySelector('.container_form');
  
      const arrQuestions = [];
      const length = questionForm.children.length;
      
      for (let i = 0; i < length; i++) {
          const questions = questionForm.children[i].children[0].value;
          arrQuestions.push(questions);
          
      }    
      const title = container.children[0].value;
      const jsonSub = {
          "title": title,
          "questions": {...arrQuestions}
      }

      sendSurvey(jsonSub)
  }
  async function sendSurvey(json){
      const response = await axios.post('/survey/addSurvey', json);
  }
  
  
  let cont = 0;
  function dispayFormQuestions(){   
      const questionForm = document.getElementById('questionForm');
      let html = "";
      
      html = `<div> 
      <input type="text" name="question" id="question${cont}" placeholder="Make your question...">
      </div`
      
      questionForm.insertAdjacentHTML("beforeend",html);
      cont++;
  }
  // EVENT LISTENERS
  subBtn.addEventListener('click', addSurvey);
  addQuest.addEventListener('click', dispayFormQuestions);