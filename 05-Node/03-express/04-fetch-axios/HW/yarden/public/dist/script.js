// import axios from 'axios'
// Modal open buttons:
var addModalBtn = document.querySelector('#open-add-modal-btn');
var showModalBtn = document.querySelector('#open-show-modal-btn');
// The modals themselves:
var addModal = document.querySelector('#add-modal');
var showModal = document.querySelector('#show-modal');
// Modal close buttons:
var closeModalButtonAdd = document.querySelector('#close-modal-btn-add');
var closeModalButtonShow = document.querySelector('#close-modal-btn-show');
// Open modals on click
addModalBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    addModal.classList.remove('hide');
});
showModalBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    showModal.classList.remove('hide');
});
// Close modals on click:
closeModalButtonAdd.addEventListener('click', function (ev) {
    ev.preventDefault();
    addModal.classList.add('hide');
});
closeModalButtonShow.addEventListener('click', function (ev) {
    ev.preventDefault();
    showModal.classList.add('hide');
});
// Adding a student:
// Student class:
var Student = /** @class */ (function () {
    function Student(name, age, average) {
        this.name = name;
        this.age = age;
        this.average = average;
        this.id = Math.random().toString(16).slice(2);
    }
    return Student;
}());
// Adding a student from the modal:
var addStudentForm = document.querySelector('#add-student-form');
addStudentForm.addEventListener('submit', handleSubmitAddStudent);
function handleSubmitAddStudent(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements[0].value;
        var age = ev.target.elements[1].value;
        var average = ev.target.elements[2].value;
        if (!name || !age || !average) {
            alert('One or more fields were not completed.');
            throw new Error('One or more fields were not completed.');
        }
        var newStudent = new Student(name, age, average);
        alert(newStudent.name + " added successfully with id " + newStudent.id + ".");
        console.log(newStudent);
        addModal.classList.add('hide');
        ev.target.reset();
        fetch('http://localhost:3000/addStudent', {
            method: "POST",
            body: newStudent
        }).then(function (_a) {
            var data = _a.data;
            console.log(data);
        });
    }
    catch (er) {
        console.error(er);
    }
}
fetch("/echo/json/");
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data 
