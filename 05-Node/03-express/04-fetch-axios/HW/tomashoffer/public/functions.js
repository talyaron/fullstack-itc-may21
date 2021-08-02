let studients = [];

// QUERY SELECTORS
const getBtn = document.querySelector("#getButton");
const submitBtn = document.querySelector("#submitBtn");
const paramBtn = document.querySelector("#paramButton");
const queryBtn = document.querySelector("#queryButton");

// EVFENTLISTENERS
getBtn.addEventListener("click", getStudients);
getBtn.addEventListener("click", alertAll);
submitBtn.addEventListener("click", alertAdd);
queryBtn.addEventListener("click", searchbyQuery);
paramBtn.addEventListener("click", searchbyParam);

// HANDLESUBMIT
function handleSubmit(e) {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let age = e.target.elements.age.value;
  let average = e.target.elements.average.value;
  let id = uuidv4(); //YS: This should be added in the BE.
  const studient = { name, age, average, id };
  studients.push(studient);
  // POST STUDENT
  axios.post("/postStudents", studient).then((res) => {
    let studentRender = [res.data];
    renderStudients(studentRender);
  });
}
// RENDER STUDIENTS
function renderStudients(arr) {
  const root = document.querySelector(".list-group");
  let html = "";
  if (Array.isArray(arr)) {
    arr.forEach((studient) => {
      html += `<li href="#" class="list-group-item list-group-item-action list-group-item-primary">Name: ${studient.name} - Age: ${studient.age} - Average Grade: ${studient.average} - Id: ${studient.id}</li>`;
    });
  } else {
    html += `<li href="#" class="list-group-item list-group-item-action list-group-item-primary">Name: ${arr.name} - Age: ${arr.age} - Average Grade: ${arr.average} - Id: ${arr.id}</li>`;
  }
  root.innerHTML = html;
}
// GET LIST OF STUDIENTS
async function getStudients() {
  const response = await axios.get("/getAllStudent");
  renderStudients(response.data);
}
// HANDLE ID FORM
function handleId(e) {  //YS: What is this function for? 
  e.preventDefault();
  const id = e.target.elements.search.value;
  searchbyParam(id);
  searchbyQuery(id);
}
// SEARCH BY PARAM
async function searchbyParam(id) {
  const response = await axios.get(`/searchParam/${id}`);
  renderStudients(response.data);
}
// SEARCH BY QUERY
async function searchbyQuery(id) {
  const response = await axios.get(`/searchQuery?id=${id}`);
  renderStudients(response.data);
}
// ALERTS
function alertAdd() { /*YS: Very nice touch, although you are not very DRY here since both these functions are basically the same, 
                      the only thing that changes is what you say (you can put them in the same place in the DOM). So you can make the same function and just put the message as a parameter */
  const root = document.querySelector(".listado_alert");
  let html = "";
  html += `<div class="alert alert-warning" role="alert">
          You add a new Student to the list!
        </div>`;
  root.innerHTML = html;
  setTimeout(function () { 
    root.innerHTML = "";
  }, 3000);
}
function alertAll() {
  const alertAllStudients = document.querySelector(".listado_alert");
  let html = "";
  html += `<div class="alert alert-success" role="alert">
       This are all ours Studients in the University!
     </div>`;
  alertAllStudients.innerHTML = html;
  setTimeout(function () {
    alertAllStudients.innerHTML = "";
  }, 3000);
}
