var inputName = document.querySelector('#name');
var form = document.getElementById('form');
var btnReset = document.querySelector('.container--reset');
//btn
var btnFirst = document.querySelector('.container__exercises__fieldset--first');
var btnSecond = document.querySelector('.container__exercises__fieldset--second');
var btnThird = document.querySelector('.container__exercises__fieldset--third');
var ResidentList = [];
var previousEnters = JSON.parse(localStorage.getItem("exercise"));
if (previousEnters !== null) {
    previousEnters.forEach(function (element) {
        ResidentList.push({ "name": element.name, "building": element.building });
    });
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(ev) {
    ev.preventDefault();
    try {
        var name = ev.target.elements.name.value;
        if (!name)
            throw new Error('You have to enter a name first');
        if (name === 'l') {
            btnSecond.disabled = false;
            btnThird.disabled = false;
            btnSecond.style.cursor = 'pointer';
            btnThird.style.cursor = 'pointer';
            alert('Now you can use the second and third button to check all residents and which building they are in');
        }
        else {
            ResidentList.push({ "name": name, "building": Math.random() >= 0.5 ? 'A' : 'B' });
            localStorage.setItem("exercise", JSON.stringify(ResidentList));
            alert('You enter a new resident. Please check the entry number with the first button');
        }
    }
    catch (e) {
        alert(e);
    }
    ev.target.reset();
}
//btn
btnFirst.addEventListener('click', firstExercise);
function firstExercise() {
    window.location.href = "first.html";
}
btnSecond.addEventListener('click', secondExercise);
function secondExercise() {
    window.location.href = "second.html";
}
btnThird.addEventListener('click', thirdExercise);
function thirdExercise() {
    window.location.href = "third.html";
}
btnReset.addEventListener('click', resetLocalStorage);
function resetLocalStorage() {
    localStorage.clear();
    ResidentList = [];
}
