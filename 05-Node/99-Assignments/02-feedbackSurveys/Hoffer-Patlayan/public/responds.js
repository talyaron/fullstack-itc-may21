async function getSurv() {
  const getSurv = await axios(`/survey/getSurvey`);
  const selected = getSurv.data;

  render(selected);
  console.log(selected);
  // // const idSurv = selected.id;
  // renderSurvey(selected);
  // renderForm(selected)
  // // idSelected.push(idSurv)
}
getSurv();

const render = (survey) => {
  const root = document.querySelector(".root");

  const preguntas = survey.question;
  const arrPregs = Object.values(preguntas);
  let htmlQuestions = "";
  arrPregs.forEach((preg) => {
    htmlQuestions += `
        <div class="respondses">
        <h3>${preg}</h3>
        <select name="responds" id="respondses">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        </div>
       
        
        `;
  });
  root.innerHTML = htmlQuestions;
};
