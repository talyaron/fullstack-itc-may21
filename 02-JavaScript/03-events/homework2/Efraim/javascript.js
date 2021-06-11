function handleSubmit(ev) {
    ev.preventDefault();
    let playerName = ev.target.children.id.value;
    const imageSelect = document.querySelectorAll('.image-select');
    const imageChosen = document.querySelectorAll(".image-chosen");
    let playerImage;
    for (let i = 0; i < imageSelect.length; i++) {
        if (imageSelect[i].checked) {
            playerImage = imageChosen[i].src;
        }
    }
    if (playerImage === undefined) {
        throw new Error('No player selected!')
    }
    let posx = parseInt(ev.target.children.posix.value);
    if (posx > 96) {
        posx = 96;
    }
    let posy = parseInt(ev.target.children.posiy.value);
    if (posy > 94) {
        posy = 94;
    }
    
    const newPiece = new GamePiece(`#${playerName}`, `${playerImage}`, '50px', '38px', {
        x: posx,
        y: posy

    });
    // document.addEventListener('keyup', ev => {
    //     console.log(ev.key)

    // })
    ev.target.reset();


}

class GamePiece {


    constructor(pieceId, imagePhoto, width, height, position) {
        try {

            if (typeof position !== "object") throw new Error('position is not an object')
            if (!("x" in position) || !("y" in position)) throw new Error(
                'starting point should have this format {x:0, y:0}')

            this.height = height;
            this.width = width;
            this.pieceId = pieceId;
            this.imagePhoto = imagePhoto;

            //inner position
            this.position = {};
            this.position.x = position.x;
            this.position.y = position.y;

            //initilizing
            this.boardGamed = document.querySelector('#boardGame');
            this.createPeice();
            this.step = 2;

        } catch (e) {
            console.error(e)
        }

        document.addEventListener('keyup', (ev) => this.listener(ev))

    }

    createPeice() {
        try {
            this.piece = document.createElement('img');
            this.piece.setAttribute('src', this.imagePhoto);
            this.piece.setAttribute('width', this.width);
            this.piece.setAttribute('height', this.height);
            this.piece.classList.add("piece");
            this.piece.style.left = `${this.position.x}%`;
            this.piece.style.top = `${this.position.y}%`;
            this.boardGamed.appendChild(this.piece);
        } catch (e) {
            console.error(e)
        }
    }

 
    //let create a method for moving left
    moveRight() {
        if (this.step + this.position.x < 98) {
            this.position.x += this.step;
            this.piece.style.left = `${this.position.x}%`;
        }
    }

    moveLeft() {
        if (this.position.x - this.step > -1) {
            this.position.x -= this.step;
            this.piece.style.left = `${this.position.x}%`;
        }
    }
    moveDown() {
        if (this.position.y + this.step < 94) {
            this.position.y += this.step;
            this.piece.style.top = `${this.position.y}%`;
        }
    }

    moveUp() {
        if (this.position.y - this.step > -1) {
            this.position.y -= this.step;
            this.piece.style.top = `${this.position.y}%`;
        }
    }
    listener(ev) {
        switch (ev.key) {
            case "ArrowLeft":
                this.moveLeft();
                break;
            case "ArrowRight":
                this.moveRight();
                break;
            case "ArrowDown":
                this.moveDown();
                break;
            case "ArrowUp":
                this.moveUp();
                break;

        }
    }
}