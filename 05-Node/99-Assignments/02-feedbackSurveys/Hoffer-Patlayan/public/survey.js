const iconDelete = document.querySelector(".icon_delete");


// GET USER FOR WELCOME
const getUser = async () => {
  const getUser = await axios.get("/users/getUsers");
  const { name } = getUser.data;
  render(name);
};
const render = (name) => {
  const root = document.querySelector(".root");

  const renderIt = `<h2>Hello ${name} and Welcome!</h2>`;
  root.innerHTML = renderIt;
};
getUser();

let arrSurvey = [];

// GET SURVAYS
const getLogInUser = async () => {
  const getUser = await axios.get("/survey/logUser");
  const dataUser = getUser.data;
  const surveyData = dataUser.createSurvey;
  arrSurvey.push(surveyData);
  renderSurvay(surveyData)
  
};
getLogInUser()

function renderSurvay(surveyData){
  const root = document.querySelector(".render_survey");
  let html = "";
  surveyData.forEach((survey) => {
    html += `<a onclick='selectedSurv("${survey.id}")' href="selectedSurvey.html"><div class="survey_info">
                <h3 style="cursor: pointer">${survey.title}</h3>
                <a style="cursor: pointer"><i onclick='deleteSurvey("${survey.id}")' class="icon_delete fas fa-trash"></i></a>
              </div></a>`;
  });root.innerHTML = html;
}  

function deleteSurvey(id){
  const getUser = axios.post(`/survey/deleteSurvey/${id}`);
  window.location.reload();
  getLogInUser()
}

async function selectedSurv(id){
  const getUser = axios.get(`/survey/saveSurvey/${id}`);
}
