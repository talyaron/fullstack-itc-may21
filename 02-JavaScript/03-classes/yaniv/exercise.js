class Player {

    constructor(playerID,playerName,playerColor,playerShapeClass) {
        this.playerID = playerID;
        this.playerName = playerName;
        this.playerColor = playerColor;
        this.playerShapeClass = playerShapeClass;
        this.playerDesc();
    }

    playerDesc() {
        console.log(`Player Name: ${this.playerName}; Player Color: ${this.playerColor}; Player Shape: ${this.playerShapeClass}`);
    }
}

const player1 = new Player('player1','Yaniv','blue','circle');

console.log(player1);

const player2 = new Player('player2','Tal','green','rectangualr');

console.log(player2);