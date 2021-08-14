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

// GET SURVAYS

const getLogInUser = async () => {
  const getUser = await axios.get("/survey/logUser");
  const dataUser = getUser.data;
  const surveyData = dataUser.createSurvey;
  renderSurvay(surveyData)
};
getLogInUser();

function renderSurvay(surveyData){
  const root = document.querySelector(".render_survey");
  let html = "";
  surveyData.forEach((survey) => {
    html += `<div class="survey_info">
                <h3 style="cursor: pointer">${survey.title}</h3>
                <a style="cursor: pointer"><i onclick='deleteSurvey("${survey.id}")' class="delete fas fa-trash"></i></a>
              </div>`;
  });root.innerHTML = html;
}  

async function deleteSurvey(id){
  await axios.post(`/survey/deleteSurvey/${id}`);
  getLogInUser();
}
