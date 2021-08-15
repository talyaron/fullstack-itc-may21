window.onload = function(){ 
    var params = new URLSearchParams(window.location.search);
    const myUrl = window.location.href
    const id = params.get('id');
    // Prueba con Yoni
    // const idIndex = myUrl.indexOf('id')
    // let hola = myUrl.slice(idIndex + 3)
    // console.log(hola);
    getSurvey(id)
}
async function getSurvey(id){
  const gerServ = await axios.get(`/response?id=${id}`);
  render(gerServ.data)
}

console.log("adsads")

const render = (survey) => {
  const rootTtile = document.querySelector(".rootTitle");
  const rootQuestion = document.querySelector(".rootQuestion");
  let html = "";
  html += `<h1>Survey: ${survey.title}</h1>`
  rootTtile.innerHTML = html;
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
  rootQuestion.innerHTML = htmlQuestions;
};
