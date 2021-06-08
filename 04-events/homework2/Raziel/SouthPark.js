document.querySelector('.button').addEventListener('click',function(){
    document.querySelector('.form_modal').style.display='flex';
    });
    
    document.querySelector('.close').addEventListener('click',function(){
        document.querySelector('.form_modal').style.display='none';
    });
    
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
            this.player.style.position="absolute";
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
        if (this.position.y + this.step < 95) {
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
