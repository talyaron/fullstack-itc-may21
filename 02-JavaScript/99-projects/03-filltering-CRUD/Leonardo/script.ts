/* create one page with data constructed of an array of objects (of your preferred subject)
show all objects on the DOM (responsively)

CREATE: the user can create a new item

FILTER: filter it with a select-option button
    SEARCH: there will be a free search input text, to search within the items (RegEx)

UPDATE: The user can also edit the item name

DELETE: each item can be deleted using a button on the bottom of the item. */
///////////////////////////////////////////////////////////////////////////////////////////////

//Create an enum for the status of a subject:
enum Status {
    approved = 'Approved',
    disapproved = 'Disapproved',
    inProcess = 'In Process'
};

enum Subject {
    cyberSecurity = 'Cyber Security',
    dataScience = 'Data Science',
    fullStack = 'Full Stack Developer'
}

//Create a class for the student:
class Student {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    date: Date;
    subject: Subject;
    status: Status;

    constructor(firstname: string, lastname: string, email: string, date: Date, subject: Subject) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.date = date;
        this.subject = subject;
        this.status = Status.inProcess;
    }
}

//Initialice an array of students empty (I will push al new students there)
const students: Array<Student> = [];

//Use this function to add all the students created in the other page to the new array "Students"
function addStudentsCreated(studentsData): void {
    try {
        if (!studentsData) throw new Error('You can`t access to students data');
        studentsData.forEach(element => {
            const studentData = new Student(element.firstname, element.lastname, element.email, element.date, element.subject);
            students.unshift(studentData);
        });
        if (!renderStudents) throw new Error('There is a problem finding the function renderStudents');
        renderStudents(students);
    } catch (error) {
        console.error(error);
    };
};

addStudentsCreated(studentsData);

const handleSubmit = (ev: any): void => {
    ev.preventDefault();
    try {
        const firstname: string = ev.target.elements.firstname.value;
        const lastname: string = ev.target.elements.lastname.value;
        const email: string = ev.target.elements.email.value;
        const subject: Subject = ev.target.elements.subject.value;
        const date: Date = ev.target.elements.date.value;

        const student = new Student(firstname, lastname, email, date, subject);
        if (!addNewStudent) throw new Error('There is a problem finding the function addNewStudent');
        addNewStudent(student);
        alert('User uploaded successfully');
        if (!modalUpload) throw new Error('Can`t find modalUpload from the HTML');
        modalUpload.style.display = "none";
        ev.target.reset();
    } catch (error) {
        console.error(error);
    };
};

//Push all the students that Im creating to the array
function addNewStudent(student: Student): void {
    try {
        if (!students) throw new Error('You can`t access to students data');
        students.unshift(student);
        if (!renderStudents) throw new Error('There is a problem finding the function renderStudents');
        renderStudents(students);
    } catch (error) {
        console.error(error);
    };
};

//Render all the students
function renderStudents(students): void {
    try {
        const table: HTMLElement = document.querySelector(".table");
        if (!table) throw new Error('There is a problem finding table from HTML');
        let html: string = students.map(element => {
            return (
                `<tr>
                <td>${element.firstname}</td>
                <td>${element.lastname}</td> 
                <td>${element.email}</td> 
                <td>${element.date}</td> 
                <td>${element.subject}</td> 
                <td>${element.status}</td> 
                <td>
                <i class="fas fa-edit table__edit" onclick='edit("${element.id}")' title="Edit"></i>
                <i class="fas fa-trash table__remove" onclick='remove("${element.id}", "${element.firstname}")' title="Remove"></i>
                </td>
                </tr>`
            )
        }).join('');
        table.innerHTML = html;
    } catch (error) {
        console.error(error);
    };
};

//This will contain the Student ID to Edit
let studentIdEdit: string = '';

//To edit a Student
function edit(studentId: string) {
    try {
        if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
        modalEdit.style.display = "block";
        modalEdit.classList.add("showModal");
        const form: HTMLElement = document.querySelector("#formEdit");
        if (!form) throw new Error('There is a problem finding form from HTML');
        let html: string = this.students.map(element => {
            if (element.id === studentId) {
                return (
                    `<h1>EDIT STUDENT 😎</h1>
                    <tr>
                    
                    <div class="form__wrapper">
                    <label for="firstname">First name:</label>
                    <input type="text" name="firstname" id="firstname" maxlength="20" value=${element.firstname} required>
                    </div>
    
                    <div class="form__wrapper">
                    <label for="lastname">Last name:</label>
                    <input type="text" name="lastname" id="lastname" maxlength="20" value=${element.lastname} required>
                    </div>
    
                    <div class="form__wrapper">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" value=${element.email} required>
                    </div>
                    
                    <div class="form__wrapper">
                    <label for="date">Inscription date:</label>
                    <input type="date" name="date" id="date" value=${element.date} required>
                    </div>
    
                    <div>
                        <label for="inProcess">In Process</label>
                        <input type="radio" id="inProcess" name="status" value="${Status.inProcess}" checked />
    
                        <label for="approved">Approved</label>
                        <input type="radio" id="approved" name="status" value="${Status.approved}" />
    
                        <label for="disapproved">Disapproved</label>
                        <input type="radio" id="disapproved" name="status" value="${Status.disapproved}" />
                    </div>
                    <input class="form__input--submit" type="submit" value="Save changes">`
                )
            }
        }).join('');
        form.innerHTML = html;
        studentIdEdit = studentId;
    } catch (error) {
        console.error(error);
    };
};

//Handle Edit
const handleEdit = (ev: any): void => {
    ev.preventDefault();
    try {
        const firstname: string = ev.target.elements.firstname.value;
        const lastname: string = ev.target.elements.lastname.value;
        const email: string = ev.target.elements.email.value;
        const status: Status = ev.target.elements.status.value;
        const date: Date = ev.target.elements.date.value;

        const edit = students.find(element => element.id === studentIdEdit);
        edit.firstname = firstname;
        edit.lastname = lastname;
        edit.email = email;
        edit.date = date;
        edit.status = status;

        if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
        modalEdit.style.display = "none";
        ev.target.reset();
        if (!renderStudents) throw new Error('There is a problem to render the students');
        renderStudents(students);
    } catch (error) {
        console.error(error);
    };
};

//To delete a Student
function remove(studentId: string, name: string) {
    try {
        const option = confirm(`Are you sure do you want to delete ${name}?`); //YS: Nice!
        if (option === true) { //YS: If its true, you just need: if(option)
            const studentIndex = this.students.findIndex((element: Student) => element.id === studentId);
            this.students.splice(studentIndex, 1); 
            /*YS: Notice that with splice you are changing the original array 
            while with other methods like filter you create a new array. Always be aware of what the method returns 
            and if it modifies the original array or not.*/
            if (!renderStudents) throw new Error('There is a problem to render the students');
            renderStudents(students);
        }
    } catch (error) {
        console.error(error);
    }
};

function handleFilter(): void {  
    try {
        const subject: any = document.querySelector('#status');
        if (!subject) throw new Error('Can`t access to subject in filter');
        const status: any = document.querySelector('#subject');
        if (!status) throw new Error('Can`t access to status in filter');

        if (subject.value === '-' && status.value !== '-') {
            const studentsFiltered: Array<Student> = students.filter(element => (element.status === status.value));
            /*YS: You should use square brackets and not parenthesis in a callback: .filter(element => {element.status === status.value}); 
            And if you use arrow functions and return in the same line you dont need anything: .filter(element => element.status === status.value);
            */
            checkFilters(studentsFiltered);
        } else if (status.value === '-' && subject.value !== '-') {
            const studentsFiltered: Array<Student> = students.filter(element => (element.subject === subject.value));
            checkFilters(studentsFiltered);
        } else if ((status.value === '-' && subject.value === '-')) {
            renderStudents(students);
        } else {
            const studentsFiltered = students.filter(element => ((element.subject === subject.value) && (element.status === status.value)));
            checkFilters(studentsFiltered);
        };

    } catch (error) {
        console.error(error);
    };
};

//Function to render or to add a not found title, depending the results of the filters
function checkFilters(studentsFiltered: Array<Student>): void {
    try {
        if (studentsFiltered.length === 0) {
            const table: HTMLElement = document.querySelector(".table");
            if (!table) throw new Error('There is a problem finding table from HTML');

            let html: string = `<h1 class="table__noFound"> Elements not found </h1>`;
            table.innerHTML = html;
        } else {
            renderStudents(studentsFiltered)
        }
    } catch (error) {
        console.error(error);
    }
};

//Function to look for a word in the array 
function handleSearch(ev): void {
    try {
        ev.preventDefault();
        const search: any = document.querySelector('#search');
        if (!search) throw new Error('Can`t access to the search in filters');
        const results = checkEnterByUser(search.value);
        checkFilters(results);
    } catch (error) {
        console.error(error);
    };
};

//Look for Students with the search term enter by the user (name and lastname), then render the students
function checkEnterByUser(searchTerm: string): Array<Student> {
    try {
        const searchTermReg: RegExp = new RegExp(searchTerm, 'gmi');
        let studentResult = students.filter(function (student) { //YS: Why not arrow function?
            return searchTermReg.test(student.firstname) || searchTermReg.test(student.lastname)
        });
        return studentResult
    } catch (error) {
        console.error(error);
    };
};

//Create the next boolean to control the sort when user clicks
let order: boolean = true;

//Adding events to sort the array students when user clicks
try {
    const sortName: HTMLElement = document.querySelector("#tblData__titles--firstname");
    if (!sortName) throw new Error('There is a problem sorting the name');

    const sortLast: HTMLElement = document.querySelector("#tblData__titles--lastname");
    if (!sortLast) throw new Error('There is a problem sorting the lastname');

    const sortEmail: HTMLElement = document.querySelector("#tblData__titles--email");
    if (!sortEmail) throw new Error('There is a problem sorting the email');

    const sortDate: HTMLElement = document.querySelector("#tblData__titles--date");
    if (!sortDate) throw new Error('There is a problem sorting the date');

    const sortSubject: HTMLElement = document.querySelector("#tblData__titles--subject");
    if (!sortSubject) throw new Error('There is a problem sorting the subject');

    const sortStatus: HTMLElement = document.querySelector("#tblData__titles--status");
    if (!sortStatus) throw new Error('There is a problem sorting the status');

    sortName.addEventListener('click', () => { 
        /*YS: Very nice! Although as you can see this code is not DRY. You could have used the same eventlistener/function 
        for all of them and passed parameters. Also, instead of writing your function in the event listener, make a callback:
       < sortName.addEventListener('click', mySortFunction) > */
        if (order === true) {
            const sortByFirstName: Array<Student> = students.sort((a, b) => a.firstname.localeCompare(b.firstname))
            renderStudents(sortByFirstName);
            order = false;
        } else if (order === false) {
            const sortByFirstName: Array<Student> = students.sort((a, b) => b.firstname.localeCompare(a.firstname))
            renderStudents(sortByFirstName);
            order = true;
        };
    });
    sortLast.addEventListener('click', () => {
        if (order === true) {
            const sortByLastName: Array<Student> = students.sort((a, b) => a.lastname.localeCompare(b.lastname))
            renderStudents(sortByLastName);
            order = false;
        } else if (order === false) {
            const sortByLastName: Array<Student> = students.sort((a, b) => b.lastname.localeCompare(a.lastname))
            renderStudents(sortByLastName);
            order = true;
        };
    });
    sortEmail.addEventListener('click', () => {
        if (order === true) {
            const sortByEmail: Array<Student> = students.sort((a, b) => a.email.localeCompare(b.email))
            renderStudents(sortByEmail);
            order = false;
        } else if (order === false) {
            const sortByEmail: Array<Student> = students.sort((a, b) => b.email.localeCompare(a.email))
            renderStudents(sortByEmail);
            order = true;
        };
    });
    sortDate.addEventListener('click', () => {
        if (order === true) {
            const sortByDate: Array<Student> = students.sort(compareDate);
            renderStudents(sortByDate);
            order = false;
        } else if (order === false) {
            const sortByDate: Array<Student> = students.sort(compareDateOposite);
            renderStudents(sortByDate);
            order = true;
        };
    });
    sortSubject.addEventListener('click', () => {
        if (order === true) {
            const sortBySubject: Array<Student> = students.sort((a, b) => a.subject.localeCompare(b.subject))
            renderStudents(sortBySubject);
            order = false;
        } else if (order === false) {
            const sortBySubject: Array<Student> = students.sort((a, b) => b.subject.localeCompare(a.subject))
            renderStudents(sortBySubject);
            order = true;
        };
    });
    sortStatus.addEventListener('click', () => {
        if (order === true) {
            const sortByStatus: Array<Student> = students.sort((a, b) => a.status.localeCompare(b.status))
            renderStudents(sortByStatus);
            order = false;
        } else if (order === false) {
            const sortByStatus: Array<Student> = students.sort((a, b) => b.status.localeCompare(a.status))
            renderStudents(sortByStatus);
            order = true;
        };
    });
} catch (error) {
    console.error(error);
};


//Function to compare dates
const compareDate = function (firstDate, secondDate) {  //YS: DRY, you could make one function and add an if statement. 
    try {
        const date1 = new Date(firstDate.date).getTime();
        const date2 = new Date(secondDate.date).getTime();
        return date1 > date2 ? 1 : -1;
    } catch (error) {
        console.error(error);
    };
};

//Function to compare dates in the oposite way
const compareDateOposite = function (firstDate, secondDate) {
    try {
        const date1 = new Date(firstDate.date).getTime();
        const date2 = new Date(secondDate.date).getTime();
        return date1 < date2 ? 1 : -1;
    } catch (error) {
        console.error(error);
    };
};

//Instructions to import an Excel into the Table
try {
    document.querySelector('#inputExcel').addEventListener("click", () => {
        alert(`Instructions to import: 
                        ✔ The file should be an Excel ".xls" or ".xlsx"
                        ✔ The first row must be firstname, lastname, email, subject, date
                        ✔ The column "date" must be in a text format (ex: 2021-07-30)`);
    });
} catch (error) {
    console.error(error);
};

//The following code is to import an Excel into the Table
let selectedFile: File;
try {
    document.querySelector('#inputExcel').addEventListener("change", (event) => {
        selectedFile = event.target.files[0];
        let option = confirm('Are you sure do you want to import this file?'); 
        if (option === true) {
            let data = [];
            XLSX.utils.json_to_sheet(data, 'out.xlsx');
            if (selectedFile) {
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(selectedFile);
                fileReader.onload = (event) => {
                    let data = event.target.result;
                    let workbook = XLSX.read(data, { type: "binary" });
                    workbook.SheetNames.forEach(sheet => {
                        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                        let info = JSON.stringify(rowObject, undefined, 4);
                        let newArrayStudents = JSON.parse(info);
                        addStudentsCreated(newArrayStudents);
                    });
                };
            };
        };
    });
} catch (error) {
    console.error(error);
};
