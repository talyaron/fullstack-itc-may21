//method to add individual msg
var Mensaje = /** @class */ (function () {
    function Mensaje(text) {
        this.textId = "id" + Math.random().toString(16).slice(2);
        this.text = text;
    }
    return Mensaje;
}());
//class to provide an array of all texts to local storage
var TodosLosMensajes = /** @class */ (function () {
    function TodosLosMensajes() {
        this.msgs = JSON.parse(localStorage.getItem('TodosLosMensajes')) ? JSON.parse(localStorage.getItem('TodosLosMensajes')) : [];
    }
    //method to push new msg to the array
    TodosLosMensajes.prototype.addNewMsg = function (msg) {
        this.msgs.push(msg);
        localStorage.setItem("TodosLosMensajes", JSON.stringify(this.msgs));
    };
    return TodosLosMensajes;
}());
var allOfMsgs = new TodosLosMensajes();
//function for collecting text input 
//options: maybe try arrow function later + make it work by icon click
function handleSubmit(ev) {
    ev.preventDefault();
    var text = ev.target.elements.text.value;
    var msg = new Mensaje(text);
    allOfMsgs.addNewMsg(msg);
}
// render on DOM
function renderOnDOM() {
    var data = document.querySelector(".data");
    allOfMsgs.msgs.forEach(function (msg) {
        data.insertAdjacentHTML('beforeend', "<div class=\"allmsgs chat_wrapper--user1\"><p>" + msg.text + "</p></div>");
        // data.innerHTML += `<div class="allmsgs chat_wrapper--user1">${msg.text}</div>`;
    });
}
renderOnDOM();
