//*SELECTOR
const inputSearch = document.querySelector("#searchBar");
const btnGetByQuerry = document.querySelector(".btnQuery");
const btnGetByParams = document.querySelector(".btnParams");

//?URL
const url = " http://localhost:3500";

const postStudents = (e) => {
  e.preventDefault();
  let { name, id, age, avgrade } = e.target.elements;
  name = name.value;
  id = id.value;
  age = age.value;
  avgrade = avgrade.value;

  axios({
    method: "post",
    url: `${url}/postStudents`,
    data: {
      name,
      id,
      age,
      avgrade,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
    });

  e.target.reset();
};
//!debo ccambiar el handle no puede ser el post deben estar separados

//  async function deleteStudent(id) {
// const deleteStudent = await deletePromise(id)
// renderStudents(deleteStudent)

// }

const deletePromise = async (id) => {
  const deleteStudent = await fetch(`${url}/deleteStudents/${id}`, {
    method: "DELETE",
  });
  const deletes = await deleteStudent.json();
  console.log(deleteStudent);
  renderStudents(deletes);

  // }).then(r =>r.json())
  // .then(student=>{resolve(student)})
  // .catch(e=> {
  //   reject(e)
  // })
};

const getStudents = () => {
  axios({
    method: "get",
    url: `${url}/getStudents`,

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => renderStudents(data))
    .catch((err) => {
      console.log(err);
    });
};

// async function getStudentQuery(event){
//   event.preventDefault();
//   const studentQuery = await promiseGetStudentQuery()
//   renderStudents(studentQuery)
// }
const promiseGetStudentParams = async () => {
  const id = inputSearch.value;
  try {
    const responseParams = await fetch(`${url}/getStudentParams/${id}`);
    const dataParams = await responseParams.json();
    renderStudents(dataParams);
  } catch (error) {
    console.log(error);
  }
};
btnGetByParams.addEventListener("click", promiseGetStudentParams);

const promiseGetStudentQuery = async () => {
  const id = inputSearch.value;
  try {
    const responseQuery = await fetch(`${url}/getStudentQuery?id=${id}`);
    const dataQuery = await responseQuery.json();
    renderStudents(dataQuery);
  } catch (error) {
    console.log(error);
  }

  //! es lo mismo que hacer fetch then
  //! 1 amndas y deviuleves repuesta
  //!2 cambias la rspuesta JSON

  // .thenr=> r.json()()
  // .then(student => {resolve(student)})
  // .catch(e => {
  //   reject(e)
  // })
};
btnGetByQuerry.addEventListener("click", promiseGetStudentQuery);

function renderStudents(data) {
  console.log(data);
  let html = "";
  data.forEach((student) => {
    html += `<p>${student.name}</p>
    <p>${student.age}</p>
    <p>${student.avgrade}</p>
              <button onclick='deletePromise(${student.id})'>Delete</button>`;
  });

  document.getElementById("root").innerHTML = html;
}
//!IMPORTASNTE: PREGUNTAR PORQUE NO FUNCIONA CON LOS LISTENERS
//! DONDE PONER EL ASYNC SI ES CON ARROW FUNCTION
