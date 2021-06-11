// 1) create a form to insert a apiece in a game (image, starting position (x,y), id);
// 2) get all the inforamation from your form;
// 3) create a new instance of the piece on the board (with a class constructore);
// this will add the piece to the board

// create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.

function handleSubmit(ev) {
    ev.preventDefault()
    const imgUrl = ev.target.elements.piece.value;
    const position = document.querySelectorAll('.position');
    let positionX
    let positionY
    position.forEach(pos => {

        if (pos.checked) {
            console.log(pos);
         positionX = Number(pos.getAttribute(`positionX`));
            positionY = Number(pos.getAttribute(`positionY`));
            console.log(typeof positionX)
            console.log(typeof positionY)
            console.log(`1`+`1`)
        }

    })


    const pieceId = ev.target.elements.pieceId.value;
    //    const id = ev.target.elements.piece.id;

    const myPiece = new GamePiece(imgUrl, positionX, positionY, pieceId);
    reset(ev.target);
}

class GamePiece {
    constructor(imgSrc, positionX, positionY, id) {
        this.imgSrc = imgSrc;
        this.id = id;

        this.positionX = positionX;
        this.positionY = positionY;

        this.gameBoard = document.querySelector("#gameBoard");
        this.createPeice();
    }

    createPeice() {
        try {
            this.piece = document.createElement("img");
            this.piece.setAttribute("src", this.imgSrc);
            this.piece.classList.add("piece");
            this.piece.style.left = `${this.positionX}%`;
            this.piece.style.top = `${this.positionY}%`;
            this.gameBoard.appendChild(this.piece);
        } catch (e) {
            console.error(e);
        }
    }


}