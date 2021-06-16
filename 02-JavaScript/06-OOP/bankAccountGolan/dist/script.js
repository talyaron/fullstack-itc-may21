// add transcations to dom function:
var overView = document.querySelector("#overview");
var newTransction;
var Transaction = /** @class */ (function () {
    function Transaction(name, banknum, branch, acc, amount) {
        this.name = name;
        this.banknum = banknum;
        this.branch = branch;
        this.acc = acc;
        this.amount = amount;
    }
    return Transaction;
}());
this.createPiece();
createPiece(); {
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
var user1 = new printInfo("Bennet", "6", "5", "Avatar");
var user2 = new printInfo("Lapid", "1", "2", "avatarz");
// where to inject info
user1.addInfoToDOM(overView);
user2.addInfoToDOM(overView);
var users = [];

function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    var name = event.target.elements.name.value;
    var xpos = Number(event.target.elements.xpos.value);
    var ypos = Number(event.target.elements.ypos.value);
    var url = event.target.elements.url.value;
    var radio = event.target.elements.radio.value;
    createPiece(); {
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
}