getData(null, null);

const newStudentform: HTMLFormElement = document.querySelector('#students-form');
const searchStudentform: HTMLFormElement = document.querySelector('#search-student-form');
const resetBtn: HTMLElement = document.querySelector('#reset');


newStudentform.addEventListener('submit', ev => handleNewStudent(ev));
searchStudentform.addEventListener('submit', ev => handleSearchStudent(ev));
resetBtn.addEventListener('click', ev => handleReset(ev));

function handleNewStudent(ev) {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const name = formElements.studentName.value;
    const age = formElements.studentAge.valueAsNumber;
    const gradesAvg = formElements.studentGradesAvg.valueAsNumber;

    const student = { name, age, gradesAvg };

    postStudent(student);
    getData(null, null);

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

function handleSearchStudent(ev) {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const studentUuid = formElements.studentUuid.value;
    const searchType = formElements.searchType.value;

    getData(searchType, studentUuid);
    resetBtn.style.display = 'unset';

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

async function getData(searchType: string, studentUuid: string): Promise<any> {
  const dataToFetch: any = (searchType === null) ? await getStudents() : await getStudent(searchType, studentUuid);

  renderData(dataToFetch);
}

function renderData(dataToRender: any): void {
  const root: HTMLElement = document.querySelector(".students");
  let html: string = "";
  root.innerHTML = html;
  if (typeof dataToRender.data === "string") {
    root.innerHTML = dataToRender.data;
    return;
  }
  dataToRender.data.forEach((student) => {
    html += `
    <div class="students__item">
      <p id="${student.uuid}">${student.uuid}</p>
      <p id="${student.uuid}-name">${student.name}</p>
      <p id="${student.uuid}-age">${student.age}</p>
      <p id="${student.uuid}-gradesAvg">${student.gradesAvg}</p>
    </div>`;
  });

  root.innerHTML = html;
}

function handleReset(ev) {
  try {
    ev.preventDefault();

    getData(null, null);
    resetBtn.style.display = 'none';

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}