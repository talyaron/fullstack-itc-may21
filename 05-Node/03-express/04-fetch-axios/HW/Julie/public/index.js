const studentName = document.querySelector("#name");
const age = document.querySelector("#age");
const grade = document.querySelector("#grade");
const submit = document.querySelector("#submit");
const paramsButton = document.querySelector("#params-button");
const queryButton = document.querySelector("#query-button");
const idEnteredValue = document.querySelector("#id");

submit.addEventListener("click", (ev) => handleStudent(ev));

paramsButton.addEventListener("click", findStudentbyParams);

queryButton.addEventListener("click", findStudentbyQuery);

function handleStudent(ev) {
  ev.preventDefault();
  const enteredName = studentName.value;
  const enteredAge = age.value;
  const enteredGrade = grade.value;
  const newStudent = {
    name: enteredName,
    age: enteredAge,
    grade: enteredGrade,
  };
  addStudent(newStudent);
}

function addStudent(student) {
  axios.post("/addStudent", student).then(({ data }) => {
    console.log(data);
  });
}

function getStudentsArray() {
  const list = document.getElementById("root");
  axios
    .get("/studentsArray")
    .then((r) =>
      r.data.studentsArray.forEach(
        (ting) => (list.innerHTML += ` ${ting.student}`)
      )
    );
}

function findStudentbyParams() {
  axios
    .get(`http://localhost:4000/getStudent/${idEnteredValue.value}`)
    .then(({ data }) => {
      console.log(data);
    });
}

function findStudentbyQuery() {
  axios
    .get(`http://localhost:4000/getStudent?id=${idEnteredValue.value}`)
    .then(({ data }) => {
      console.log(data);
    });
}
