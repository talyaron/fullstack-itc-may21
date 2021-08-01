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
        axios.post('/addStudent', { firstname, lastname, age, averageGrade });
    } catch (e) {
        console.error();
    }
}

//////////////////////////////////////////////////////

//To handle the "show all the students" button. CREATING A NEW PROMISE: 
showStudents.addEventListener('click', getInfo);

async function getInfo() {
    try {
        const getStudents = await getAllStudents();
        render(getStudents);
    } catch (error) {
        console.error(error);
    }
};

function getAllStudents() {
    return new Promise((resolve, reject) => {
        axios.get('/getStudents').then(({ data }) => {
            resolve(data);
        })
            .catch(e => {
                reject(e)
            });
    });
};

//////////////////////////////////////////////////////

//To handle the button "by params" and show the information of the student. DOING ASYNC-AWAIT:
informationParams.addEventListener('click', getStudentParam);

async function getStudentParam() {
    const studentInfoParam = await axios.get(`/showStudentParam/${searchId.value}`);
    render(studentInfoParam.data);
}

//To handle the button "by querys" and show the information of the student. DOING ASYNC-AWAIT:
informationQuerys.addEventListener('click', getStudentQuery);

async function getStudentQuery() {
    const studentInfoQuery = await axios.get(`/showStudentQuery?id=${searchId.value}`);
    render(studentInfoQuery.data);
};

//////////////////////////////////////////////////////

//To delete a Student
async function removeStudent(studentId, name) {
    try {
        const option = confirm(`Are you sure do you want to delete ${name}?`);
        if (option) {
            const DataWithOutDelete = await axios.delete(`/deleteStudent/${studentId}`);
            render(DataWithOutDelete.data);
        }
    } catch (error) {
        console.error(error);
    }
};

//////////////////////////////////////////////////////

//Function to render the user/s in the DOM
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
        <td><i class="fas fa-trash table__remove" onclick='removeStudent("${element.id}", "${element.firstname}")' title="Remove"></i></td> 
        </tr>`
        )
    }).join('');
    table.innerHTML = html;
};

//////////////////////////////////////////////////////

//Function to sort the table in the DOM (I could do this directly in the client side, but I prefer to do it in the server so I can practice and if you refresh the page the data is going to be still there):


try {
    const sortName = document.querySelector("#tblData__titles--firstname");
    if (!sortName) throw new Error('There is a problem sorting the name');

    const sortLast = document.querySelector("#tblData__titles--lastname");
    if (!sortLast) throw new Error('There is a problem sorting the lastname');

    const sortAge = document.querySelector("#tblData__titles--age");
    if (!sortAge) throw new Error('There is a problem sorting the age');

    const sortAverage = document.querySelector("#tblData__titles--average");
    if (!sortAverage) throw new Error('There is a problem sorting the average');

    sortName.addEventListener('click', function () { sortTable('firstname') });
    sortLast.addEventListener('click', function () { sortTable('lastname') });
    sortAge.addEventListener('click', function () { sortTable('age') });
    sortAverage.addEventListener('click', function () { sortTable('average') });
} catch (error) {
    console.error(error);
};

async function sortTable(orderBy) {
    try {
        const getStudentsSorted = await getAllStudentsSorted(orderBy);
        render(getStudentsSorted);
    } catch (error) {
        console.error(error);
    }
};

function getAllStudentsSorted(orderBy) {
    return new Promise((resolve, reject) => {
        axios.get(`/sortTable/${orderBy}`).then(({ data }) => {
            resolve(data);
        })
            .catch(e => {
                reject(e)
            });
    });
};