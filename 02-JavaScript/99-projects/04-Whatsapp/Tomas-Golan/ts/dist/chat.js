//method to add individual msg
var Mensaje = /** @class */ (function () {
    function Mensaje(text, textId) {
        this.textId = "id" + Math.random().toString(16).slice(2);
        this.text = text;
        this.textId = textId;
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
//function for collecting text input 
//options: maybe try arrow function later + make it work by icon click
function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev, 'should catch event upon submit');
    var text = ev.target.elements.text.value;
    console.log(text, 'should catch text');
    var textId = ev.target.elements.textId.value;
    var msg = new Mensaje(text, textId);
    console.log(msg, 'should display msg');
    allOfMsgs.addNewMsg(msg);
}
// render on DOM
function renderOnDOM() {
    var AllMsgs = JSON.parse(localStorage.getItem('TodosLosMensajes'));
    var data = document.querySelector(".data");
    AllMsgs.forEach(function (msg) {
        data.insertAdjacentHTML += "<div class=\"allmsgs\">" + msg.text + "</div>";
    });
}
var allOfMsgs = new TodosLosMensajes();
renderOnDOM();
