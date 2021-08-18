
window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  const myUrl = window.location.href;
  const id = params.get("id");
  // Prueba con Yoni
  // const idIndex = myUrl.indexOf('id')
  // let hola = myUrl.slice(idIndex + 3)
  // console.log(hola);
  getSurvey(id);
};
async function getSurvey(id) {
  const gerServ = await axios.get(`/response?id=${id}`);
  render(gerServ.data);
}
async function getResp() {
  const gerServ = await axios.get(`/response/getResp`);
  console.log(gerServ.data);
}
getResp();

console.log("adsads");

const render = (survey) => {
  const rootTtile = document.querySelector(".rootTitle");
  const rootQuestion = document.querySelector(".rootQuestion");

  let html = "";
  html += `<h1 calss"suvery">Survey: ${survey.title}</h1>`;

  rootTtile.innerHTML = html;
  const preguntas = survey.question;
  const arrPregs = Object.values(preguntas);
  let htmlQuestions = "";
  arrPregs.forEach((preg) => {
    htmlQuestions += `
        <div class="respondses">
        <h3>${preg}</h3>
        <select name="responds"  id="respondses">
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

const handleSubmit =  (event) => {
 
  event.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const arr = []
  const responds = event.target.elements.responds;
  responds.forEach(element => {
    arr.push(+(element.value))
  });

  console.log([arr],id)
  
   //const select = document.getElementById("respondses");
   //const options=document.getElementsByTagName("option");

  // const question = document.querySelector('.rootTitle');
  // const pepe = question.children;
  // console.log(pepe);
  axios({
    method: "post",
    url: `/response/postResponds`,
    data: {
      id,
      arr,
    },
  })
    .then(({ data }) => {
      console.log(data);
      return data;
    })

    .catch((err) => {
      console.log(err);
    });
};
// async function sendRes(newRes){
//   const response = await axios.post(`/response/postResponds`, newRes);
//   console.log(response); 
// }

