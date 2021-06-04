class GamePlayer {

    constructor(playerID,playerName,playerColor,playerShapeClass) {
        this.playerID = playerID;
        this.playerName = playerName;
        this.playerColor = playerColor;
        this.playerShapeClass = playerShapeClass;        
    }
}

let player1 = new GamePlayer('#player1','Yaniv','blue','.circle');

console.log(player1);

let player2 = new GamePlayer('#player2','Tal','green','.rectangualr');

console.log(player2);