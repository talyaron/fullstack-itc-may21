
//method to add individual msg
class Mensaje {
    text: string;
    textId: string = "id" + Math.random().toString(16).slice(2);
    constructor(text: string) {
        this.text = text;
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
const allOfMsgs = new TodosLosMensajes();
//function for collecting text input 
//options: maybe try arrow function later + make it work by icon click
function handleSubmit(ev) {
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    const msg: Mensaje = new Mensaje(text);
    allOfMsgs.addNewMsg(msg);
    
    console.log(text, 'should catch text');
    console.log(msg, 'should display msg');
    
    
}
// render on DOM
function renderOnDOM() {
    const data :HTMLElement = document.querySelector(".data");
    allOfMsgs.msgs.forEach(msg => {
        data.insertAdjacentHTML('beforeend',`<div class="allmsgs">${msg.text}</div>`);
        // data.innerHTML += `<div class="allmsgs">${msg.text}</div>`;
    });
    
}


renderOnDOM();
