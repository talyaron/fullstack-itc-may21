/* 1) create a form to insert a a piece in a game (image, starting position (x,y), id);
2) get all the inforamation from your form;
3) create a new instance of the piece on the board (with a class constructor);
this will add the piece to the board */

class GamePiece {

    //help to create the unique properties of the object
    constructor(pieceId, imageUrl, width, postion) {
        try {
            if (typeof postion !== "object") throw new Error('Postion is not an object')
            if (!("x" in postion) || !("y" in postion)) throw new Error('Starting point should have this format {x:0, y:0}')

            this.width = width
            this.pieceId = pieceId;
            this.imageUrl = imageUrl;

            //inner position
            this.postion = {};
            this.postion.x = postion.x;
            this.postion.y = postion.y;

            //initilizing
            this.boardGamed = document.querySelector('#boardGame');
            if (!this.boardGamed) throw new Error('The boardGame its not exist')
            this.createPeice();
            this.step = 2;
        } catch (e) {
            console.error(e)
        }
    }

    //lets create an element on the dom with that id.
    createPeice() {
        try {
            this.piece = document.createElement('img');
            this.piece.setAttribute('src', this.imageUrl);
            this.piece.setAttribute('width', this.width);
            this.piece.classList.add("piece");
            this.piece.style.left = `${this.postion.x}%`;
            this.piece.style.top = `${this.postion.y}%`;
            this.boardGamed.appendChild(this.piece);
        } catch (e) {
            console.error(e);
        }
    }

    //let create a method for moving
    moveRight() {
        try {
            if (this.step + this.postion.x < 85) {
                this.postion.x += this.step;
                this.piece.style.left = `${this.postion.x}%`;
                this.piece.style.transform = `rotateY(0deg)`;
            }
        } catch (error) {
            console.error(error);
        }
    }

    moveLeft() {
        try {
            if (this.postion.x - this.step > 0) {
                this.postion.x -= this.step;
                this.piece.style.left = `${this.postion.x}%`;
                this.piece.style.transform = `rotateY(180deg)`;
            }
        } catch (error) {
            console.error(error);
        }
    }
    moveDown() {
        try {
            if (this.postion.y + this.step < 82) {
                this.postion.y += this.step;
                this.piece.style.top = `${this.postion.y}%`;
                this.piece.style.transform = `rotateZ(90deg)`;
            }
        } catch (error) {
            console.error(error);
        }
    }

    moveUp() {
        try {
            if (this.postion.y - this.step > 0) {
                this.postion.y -= this.step;
                this.piece.style.top = `${this.postion.y}%`;
                this.piece.style.transform = `rotateZ(270deg)`;
            }
        } catch (error) {
            console.error(error)
        }
    }
}

// instance
const pacman = new GamePiece('#pacman', 'https://i.gifer.com/l3K.gif', '15%', { x: 50, y: 50 });

const ghost = new GamePiece('#ghost', 'https://art.pixilart.com/37f719b8a62f06d.gif', '15%', { x: 10, y: 10 });

let newPlayer = "";

function handleSubmit(ev) {
    try {
        if (!ev) throw new Error('The event doesn`t exist')
        ev.preventDefault();
        let images = ev.target.querySelectorAll('[name="playerImg"]');
        let imageURL;
        for (let i = 0; i < images.length; i++) {
            if (images[i].checked) {
                imageURL = document.querySelector(`label[for="${images[i].id}"`).children[0].src;
            }
        }
        if (!imageURL) throw new Error('You should select an image')
        let startingPointX = ev.target.children.startingPointX.value;
        let startingPointY = ev.target.children.startingPointY.value;
        let playerWidth = ev.target.children.width.value;
        let idPlayer = ev.target.children.id.value;
        console.log(`The form information is:
            Image src: ${imageURL}
            Position: ${startingPointX}, ${startingPointY}
            Player width: ${playerWidth}
            Player ID: ${idPlayer}`);
        newPlayer = new GamePiece(`#${idPlayer}`, imageURL, `${playerWidth}%`, { x: startingPointX, y: startingPointY });
        ev.target.reset();
    } catch (error) {
        console.error(error)
    }
}

//I know that I didnt apply "import and export" between listeners.js and script.js, however I told that to Tal and he is going to teach that soon (I tried to do it by myself but I couldn`t