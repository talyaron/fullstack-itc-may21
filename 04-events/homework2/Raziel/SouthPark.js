
    
class GamePlayer{
    constructor(playerId,playerImg,position){

       try {
        if (typeof position !== "object") throw new Error('position is not an object')
        if (!("x" in position) || !("y" in position)) throw new Error(
            'starting point should have this format {x:0, y:0}')

      this.playerId=playerId;
      this.playerImg=playerImg;
    
      this.position={};
      this.position.x = position.x;
      this.position.y = position.y;
      ///----------------------

      this.boardArea=document.querySelector('#gameBoard');
      this.createPLayer();
      this.step=2;

       } catch (e) {
           console.log(e);
       } 
    }

    createPLayer(){
        try {
            this.player=document.createElement('img');
            this.player.setAttribute('src',this.playerImg);
            this.player.style.position="relative";
            this.player.style.width = "100px";
            this.player.style.height = "100px";
            this.player.style.left = `${this.position.x}%`;
            this.player.style.top = `${this.position.y}%`;
            this.boardArea.appendChild(this.player);

        } catch (e) {
            console.log(e);
            
        }
    }
    moveRight() {
        if (this.step + this.position.x < 96) {
            this.position.x += this.step;
            this.player.style.left = `${this.position.x}%`;
        }
    }

    moveLeft() {
        if (this.position.x - this.step > -1) {
            this.position.x -= this.step;
            this.player.style.left = `${this.position.x}%`;
        }
    }
    moveDown() {
        if (this.position.y + this.step < 95) {
            this.position.y += this.step;
            this.player.style.top = `${this.position.y}%`;
        }
    }

    moveUp() {
        if (this.position.y - this.step > -2) {
            this.position.y -= this.step;
            this.player.style.top = `${this.position.y}%`;
        }
    }
}

function handleSubmit(ev){
    ev.preventDefault();
   const inputName= document.querySelector('#charName');
   const radioInput=document.querySelectorAll('.charImg');
   const posX= document.querySelector( "[name='posix']");
   const posY= document.querySelector("[name='posiy']");
try {
    let charName=inputName.value;
    if (charName === "") throw new Error('The name is empty, please add a name');
    let charPosX=posX.value;
    if (!charPosX) throw new Error('error of position X');
    let charPosY=posY.value;
    if (!charPosY) throw new Error('error of position Y');
    let charpic;
    for (let i = 0, length = radioInput.length; i < length; i++) {
        if (radioInput[i].checked) {
            charpic = radioInput[i].value
        }
    }
    //console.log(charName, charpic, charPosX, charPosY);
    const newSouthPark = new GamePlayer(`#${charName}`, charpic, {
        x: parseInt(charPosX),
        y: parseInt(charPosY)
    });

    document.addEventListener('keyup', ev => {
        console.log(ev.key)
        switch (ev.key) {
            case "ArrowLeft":
                newSouthPark.moveLeft();
                break;
            case "ArrowRight":
                newSouthPark.moveRight();
                break;
            case "ArrowDown":
                newSouthPark.moveDown();
                break;
            case "ArrowUp":
                newSouthPark.moveUp();
                break;
           
        }
    })
    
} catch (e) {
    
    console.log(e)
}


}

