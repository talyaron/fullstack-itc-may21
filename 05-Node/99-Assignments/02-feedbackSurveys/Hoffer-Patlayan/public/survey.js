const iconDelete = document.querySelector(".icon_delete");

// GET USER FOR WELCOME
const getUser = async () => {
  const getUser = await axios.get("/users/getUsers");
  const { name } = getUser.data;
  render(name);
};
const render = (name) => {
  const root = document.querySelector(".root");

  const renderIt = `<h5>Welcome ${name}!</h5>`;
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
    html += `   <div class="survey_info">
    <a class="title_survey" onclick='selectedSurv("${survey.id}")' href="selectedSurvey.html"><h3 class="title_surveys">${survey.title}</h3></a>
    <div class="survey_icons">
      <a style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal"><i onclick='shareId("${survey.id}")' class="icon_share fas fa-share-alt-square fa-lg"></i></a>
      <a style="cursor: pointer"><i onclick='deleteSurvey("${survey.id}")' class="icon_delete fas fa-trash fa-lg"></i></a>
    </div>
  </div>`;
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


async function shareId(id){
  const gerServ = await axios.get(`/response?id=${id}`);
  const idServShare = gerServ.data.id;
  modalRender(idServShare);
}

function modalRender(id){
  const root = document.querySelector(".modal-body");
  let html = "";
  html += `<h5>Share this link:</h5>
  <a href="http://localhost:3500/response.html?id=${id}">http://localhost:3500/response.html?id=${id}</a><br><br>
    <a class="icon_wpp" href="https://api.whatsapp.com/send?text=http://localhost:3500/response.html?id=${id}" data-action="share/whatsapp/share">Share by Whatssapp</a>`;
  root.innerHTML = html;
}

async function resultsId(id){
  const gerServ = await axios.get(`/survey/results`, id);
}
