// 1) create a form to insert a apiece in a game (image, starting position (x,y), id);
// 2) get all the inforamation from your form;
// 3) create a new instance of the piece on the board (with a class constructore);
// this will add the piece to the board

// create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.




class GamePiece {
    //help to create the unique properties of the object
    constructor(pieceId, imageUrl, width = "50px", postion) {
        try {
            if (typeof postion !== "object")
                throw new Error("postion is not an object");
            if (!("x" in postion) || !("y" in postion))
                throw new Error(
                    "starting point should have this format {x:0, y:0}"
                );

            this.width = width;
            this.pieceId = pieceId;
            this.imageUrl = imageUrl;

            //inner position
            this.postion = {};
            this.postion.x = postion.x;
            this.postion.y = postion.y;

            //initilizing
            this.gameBoard = document.querySelector("#gameboard");
            this.createPiece();
            this.step = 2;
        } catch (e) {
            console.error(e);
        }
    }

    //a method

    //lets create an element on the dom with that id.
    createPiece() {
        try {
            this.piece = document.createElement("img");
            this.piece.setAttribute("src", this.imageUrl);
            this.piece.setAttribute("width", this.width);
            this.piece.classList.add("piece");
            this.piece.style.left = `${this.postion.x}%`;
            this.piece.style.top = `${this.postion.y}%`;
            this.gameBoard.appendChild(this.piece);
        } catch (e) {
            console.error(e);
        }
    }
};

const ghost = new GamePiece(
    "#ghost",
    "https://art.pixilart.com/37f719b8a62f06d.gif",
    "70px", {
        x: 10,
        y: 10
    }
);
console.log(ghost);

function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev)
    let myPiece = ev.target.children.piece.value;
    let myPieceId = ev.target.children.pieceId.value;
    let myPosition = ev.target.children.position.value;
    // let myId = ev.target.children.piece.selectedIndex.id;
    console.log(myPiece);
    console.log(myPosition);
    console.log(myPieceId)

    return let piece1 = new GamePiece(
        `${myPieceId}`,
       "${myPiece},
        "70px",
        {
            x: 10,
            y: 10
        }
    );
};