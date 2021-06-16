// add transcations to dom function:

const overView = document.querySelector("#overview");
let newTransction:any;

class Transaction {
    constructor(name:string, banknum:number, branch:number, acc:number, amount:number) {

            this.name = name;
            this.banknum = banknum;
            this.branch = branch;
            this.acc = acc;
            this.amount = amount;
        }
        this.createPiece();
    }
    

    createPiece() {
        this.piece = document.createElement('img');
        this.piece.className = this.name;
        this.piece.banknum = this.banknum;
        this.piece.branch = this.branch;
        this.piece.acc = this.acc;
        this.piece.amount = this.amount;
        console.log(this.piece);
        gameBoard.appendChild(this.piece);
        console.log(this.piece.src);
    }

//calculate total here:


//instance test
const user1 = new printInfo("Bennet", "6", "5", "Avatar");
const user2 = new printInfo("Lapid", "1", "2", "avatarz")
// where to inject info

user1.addInfoToDOM(overView);
user2.addInfoToDOM(overView);

const users = []

function handleSubmit(event) {
    event.preventDefault()
    console.dir(event.target);
    const name = event.target.elements.name.value;
    const xpos = Number(event.target.elements.xpos.value);
    const ypos = Number(event.target.elements.ypos.value);
    const url = event.target.elements.url.value;
    const radio = event.target.elements.radio.value;

    createPiece() {
        this.piece = document.createElement('img');
        this.piece.className = this.name;
        this.piece.style.position = "relative";
        this.piece.style.left = xpos;
        this.piece.style.bottom = ypos;
        this.piece.style.height = this.height;
        this.piece.style.width = this.width;
        this.piece.src = this.url;
        console.log(this.piece);
        gameBoard.appendChild(this.piece);
        console.log(this.piece.src);
    }