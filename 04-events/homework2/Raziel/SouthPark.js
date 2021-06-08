

 
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target.children)
    let playerName = document.querySelector('#charName').value;
    const imageSelect = document.querySelectorAll('#charImg');
   
    let playerImage;
    for (let i = 0; i < imageSelect.length; i++) {
        if (imageSelect[i].checked) {
            playerImage = imageChosen[i].src;
        }
    }
    if (playerImage === undefined) {
        throw new Error('No player selected!')
    }
    let posx = document.querySelector('#posix').value;
    let posy = document.querySelector('#posiy').value;
    console.log(playerName, playerImage, posx, posy);
    const newPiece = new GamePiece(`#${playerName}`, `${playerImage}`, '50px', '50px', {
        x: `${posx}`,
       y: `${posy}`
  
   });
   
    document.addEventListener('keyup', ev => {
        console.log(ev.key)
        switch (ev.key) {
            case "ArrowLeft":
                newPiece.moveLeft();
                break;
            case "ArrowRight":
                newPiece.moveRight();
                break;
            case "ArrowDown":
                newPiece.moveDown();
                break;
            case "ArrowUp":
                newPiece.moveUp();
                break;
  
        }
    })
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
            this.boardGamed = document.querySelector('#gameBoard');
            this.createPeice();
            this.step = 2;
  
        } catch (e) {
            console.error(e)
        }
  
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
        if (this.step + this.position.x < 102) {
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
        if (this.position.y + this.step < 101) {
            this.position.y += this.step;
            this.piece.style.top = `${this.position.y}%`;
        }
    }
  
    moveUp() {
        if (this.position.y - this.step > -2) {
            this.position.y -= this.step;
            this.piece.style.top = `${this.position.y}%`;
        }
    }
  }
  document.querySelector('.button').addEventListener('click', function () {
    document.querySelector('.form_modal').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.form_modal').style.display = 'none';
  });