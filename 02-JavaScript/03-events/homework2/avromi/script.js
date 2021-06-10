// 1) create a form to insert a apiece in a game (image, starting position (x,y), id);
// 2) get all the inforamation from your form;
// 3) create a new instance of the piece on the board (with a class constructore);
// this will add the piece to the board

// create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.

function handleSubmit(ev) {
    ev.preventDefault()
   const imgUrl = ev.target.elements.piece.value;
   const position = ev.target.elements.position.value;
   const pieceId = ev.target.elements.pieceId.value;
//    const id = ev.target.elements.piece.id;
    console.log(imgUrl);
    console.log(position);
    console.log(pieceId);
    const myPiece = new GamePiece(imgUrl, position, pieceId);
    reset(ev.target);
}

class GamePiece {
    constructor(imgSrc, positionXY, id){
        this.imgSrc = imgSrc;
        this.id = id;
        

        this.positionXY = {};
        this.positionXY.x = positionXY.x;
        this.positionXY.y = positionXY.y;

        this.gameBoard= document.querySelector("#gameBoard");
        this.createPeice();
    }

    createPeice() {
        try {
          this.piece = document.createElement("img");
          this.piece.setAttribute("src", this.imgSrc);
          this.piece.classList.add("piece");
          this.piece.style.left = `${this.positionXY.x}%`;
          this.piece.style.top = `${this.positionXY.y}%`;
          this.gameBoard.appendChild(this.piece);
        } catch (e) {
          console.error(e);
        }
      }

      
 

}


