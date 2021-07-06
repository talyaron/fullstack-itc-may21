
//method to add individual msg
class Mensaje {
    text: string;
    textId: string = "id" + Math.random().toString(16).slice(2);
    constructor(text: string, textId: string) {
        this.text = text;
        this.textId = textId;
    }
}
//class to provide an array of all texts to local storage
class TodosLosMensajes {
    msgs: Array<Mensaje> = JSON.parse(localStorage.getItem('TodosLosMensajes')) ? JSON.parse(localStorage.getItem('TodosLosMensajes')) : [];
    //method to push new msg to the array
    addNewMsg(msg) {
        this.msgs.push(msg);
        localStorage.setItem("TodosLosMensajes", JSON.stringify(this.msgs));
        
    }
}

//function for collecting text input 
//options: maybe try arrow function later + make it work by icon click
function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev, 'should catch event upon submit');
    
    const text = ev.target.elements.text.value;
    console.log(text, 'should catch text');
    
    const textId = ev.target.elements.textId.value;
    const msg: Mensaje = new Mensaje(text, textId);
    console.log(msg, 'should display msg');
    allOfMsgs.addNewMsg(msg);
    
    
}
// render on DOM
function renderOnDOM() {
    const AllMsgs = JSON.parse(localStorage.getItem('TodosLosMensajes'));
    const data = document.querySelector(".data");
    AllMsgs.forEach(msg => {
        data.insertAdjacentHTML += `<div class="allmsgs">${msg.text}</div>`;
    });
    
}

const allOfMsgs = new TodosLosMensajes();
renderOnDOM();