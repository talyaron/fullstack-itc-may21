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
    html += `<a onclick='selectedSurv("${survey.id}")' href="selectedSurvey.html">
                <div class="survey_info">
                  <h3 style="cursor: pointer">${survey.title}</h3>
                  <a style="cursor: pointer"><i onclick='deleteSurvey("${survey.id}")' class="icon_delete fas fa-trash"></i></a>
                  <a style="cursor: pointer"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i onclick='shareId("${survey.id}")' class="fas fa-share-alt-square"></i></a>
                </div>
              </a>`;
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
  html += `<h5>Share this link: http://localhost:3500/response.html?id=${id}</h5>
            <i class="fab fa-whatsapp-square"></i>`;
  root.innerHTML = html;
}


