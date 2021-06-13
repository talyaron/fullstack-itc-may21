// 1) create a form to insert a apiece in a game (image, starting position (x,y), id);
// 2) get all the inforamation from your form;
// 3) create a new instance of the piece on the board (with a class constructore);
// this will add the piece to the board

// create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.



class GamePiece {
    constructor(imgSrc, positionX, positionY, id) {
        this.imgSrc = imgSrc;
        this.id = id;

        this.positionX = positionX;
        this.positionY = positionY;

        this.gameBoard = document.querySelector("#gameBoard");
        this.createPeice();
        this.step = 2;
    }

    createPeice() {
        try {
            this.piece = document.createElement("img");
            this.piece.setAttribute("src", this.imgSrc);
            this.piece.classList.add("piece");
            // this.piece.setAttribute("id", this.id)
            this.piece.style.left = `${this.positionX}%`;
            this.piece.style.top = `${this.positionY}%`;
            this.gameBoard.appendChild(this.piece);
        } catch (e) {
            console.error(e);
        }
        
    }

    moveRight() {
        if (this.step + this.positionX < 100) {
            this.positionX += this.step;
            this.piece.style.left = `${this.positionX}%`;
        }
    }

    moveLeft() {

        if (this.positionX - this.step > 0) {
            this.positionX -= this.step;
            this.piece.style.left = `${this.positionX}%`;
        }
    }
    moveDown() {
        if (this.positionY + this.step < 100) {
            this.positionY += this.step;
            this.piece.style.top = `${this.positionY}%`;
        }
    }

    moveUp() {

        if (this.positionY - this.step > 0) {
            this.positionY -= this.step;
            this.piece.style.top = `${this.positionY}%`;
        }
    }


}

function handleSubmit(ev) {
    ev.preventDefault()
    const imgUrl = ev.target.elements.piece.value;
    const piece1 = document.querySelectorAll('.piece1');
    let realId
    piece1.forEach(p => {
        if (p.checked) {
            realId = p.getAttribute(`id`)
            console.log(realId)
        }
    })

    
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
           
        }

    })

    const pieceId = ev.target.elements.pieceId.value;
    //    const id = ev.target.elements.piece.id;

    const object = new GamePiece(imgUrl, positionX, positionY, pieceId);
    console.dir(object)
    reset(ev.target);
}




//LISTERNERS 

document.addEventListener('keyup', ev => {
    console.log(ev.key)
    switch (ev.key) {
        case "ArrowLeft":
           img.piece.moveLeft();
            break;
        case "ArrowRight":
            object.moveRight();
            break;
        case "ArrowDown":
            object.moveDown();
            break;
        case "ArrowUp":
            object.moveUp();
            break;
        case "a":
            ghost.moveLeft();
            break;
        case "d":
            ghost.moveRight();
            break;
        case "w":
            ghost.moveUp();
            break;
        case "x":
            ghost.moveDown();
            break;

    }
})