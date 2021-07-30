const showStudents = document.querySelector("#showStudents");
const handleForm = document.querySelector(".form");
const informationParams = document.querySelector("#informationParams");
const informationQuerys = document.querySelector("#informationQuerys");
const searchId = document.querySelector('#searchId');

//To handle the form to add a new Student:
handleForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    try {
        event.preventDefault();
        let { firstname, lastname, age, averageGrade } = event.target.elements;
        firstname = firstname.value;
        lastname = lastname.value;
        age = age.valueAsNumber;
        averageGrade = averageGrade.valueAsNumber;
        if (!firstname || !lastname || !age || !averageGrade)
            throw new Error("You need to complete all the fields");
        modalUpload.style.display = "none";
        event.target.reset();

        //Get data from the form as an object
        axios.post('/addStudent', { firstname, lastname, age, averageGrade }).then(({ data }) => { console.log(data); });
    } catch (e) {
        console.error();
    }
}

//To handle the "show all the students" button: 
showStudents.addEventListener('click', getData);

function getData() {
    axios.get('/getStudents').then(({ data }) => {
        render(data);
    });
}

function render(data) {
    const table = document.querySelector(".table");
    if (!table) throw new Error('There is a problem finding table from HTML');
    let html = data.map(element => {
        return (`
        <tr>
        <td>${element.id}</td>
        <td>${element.firstname}</td>
        <td>${element.lastname}</td> 
        <td>${element.age}</td> 
        <td>${element.averageGrade}</td> 
        </tr>`
        )
    }).join('');
    table.innerHTML = html;
}

//To handle the button "by params" and show the information of the student:
informationParams.addEventListener('click', getStudentParam);

function getStudentParam() {
    axios.get(`/showStudentParam/${searchId.value}`).then(({ data }) => {
        render(data);
    });
}

//To handle the button "by querys" and show the information of the student:
informationQuerys.addEventListener('click', getStudentQuery);

function getStudentQuery() {
    axios.get(`/showStudentQuery?id=${searchId.value}`).then(({ data }) => {
        render(data);
    });
}