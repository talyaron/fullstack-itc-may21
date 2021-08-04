// import axios from 'axios'

// Modal open buttons:
const addModalBtn:HTMLButtonElement = document.querySelector('#open-add-modal-btn')
const showModalBtn:HTMLButtonElement = document.querySelector('#open-show-modal-btn')
// The modals themselves:
const addModal:HTMLDivElement = document.querySelector('#add-modal')
const showModal:HTMLElement = document.querySelector('#show-modal')
// Modal close buttons:
const closeModalButtonAdd:SVGElement = document.querySelector('#close-modal-btn-add')
const closeModalButtonShow:SVGElement = document.querySelector('#close-modal-btn-show')
// Open modals on click
addModalBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    addModal.classList.remove('hide')
})
showModalBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    showModal.classList.remove('hide')
})
// Close modals on click:
closeModalButtonAdd.addEventListener('click', (ev) => {
    ev.preventDefault()
    addModal.classList.add('hide')
})
closeModalButtonShow.addEventListener('click', (ev) => {
    ev.preventDefault()
    showModal.classList.add('hide')
})

            // Adding a student:

// Student class:
class Student {
    name: string;
    age: number;
    average: number;
    id: string;
    constructor(name: string, age: number, average: number) {
        this.name = name
        this.age = age
        this.average = average
        this.id = Math.random().toString(16).slice(2);
    }
}

// Adding a student from the modal:
const addStudentForm:HTMLFormElement = document.querySelector('#add-student-form')
addStudentForm.addEventListener('submit', handleSubmitAddStudent)

function handleSubmitAddStudent(ev:any):void {
try {
    ev.preventDefault()

    const name = ev.target.elements[0].value
    const age = ev.target.elements[1].value
    const average = ev.target.elements[2].value
    if (!name || !age || !average) {
        alert('One or more fields were not completed.')
        throw new Error('One or more fields were not completed.')
    }
    const newStudent = new Student(name, age, average)
    alert(`${newStudent.name} added successfully with id ${newStudent.id}.`)
    console.log(newStudent)
    addModal.classList.add('hide')
    ev.target.reset()

    fetch('http://localhost:3000/addStudent', //YS: Nice try
    {
        method: "POST",
        body: newStudent
    }).then(({ data }) => {
        console.log(data);
        
    })
} catch(er) {
    console.error(er)
    } 
}

fetch("/echo/json/",

// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data 
