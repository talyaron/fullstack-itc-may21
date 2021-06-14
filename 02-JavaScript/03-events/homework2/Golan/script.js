class GamePiece {
    constructor(name, xpos, ypos, url, radio) {
        try {
            if (typeof name !== "string") throw new Error("name isn't a string!");
            // if (typeof xpos !== "number") throw new Error("xpos isn't a number!");
            // if (typeof ypos !== "number") throw new Error("ypos isn't a number!");
            //     if (typeof avatar !== "url") throw new Error("avatar isnt a url!");
            this.name = name;
            this.xpos = xpos;
            this.ypos = ypos;
            this.url = url;
            this.radio = radio;
        } catch (error) {
            console.error(error);
        }
    }
    //declare info to be logged
    info() {
        const userInfo = `You submitted: ${this.name}, ${this.xpos}, ${this.ypos}, ${this.url}, ${this.radio}`;
        console.log(userInfo);
    }
    //declare info to be injected to DOM after the user submits
    addInfoToDOM(domElement) {
        domElement.innerHTML += `<p>${this.name} submitted  ${this.xpos},${this.ypos},${this.url}, ${this.radio}`
    }
}
//new instance test
const user1 = new GamePiece("Bennet", "6", "5", "Avatar");
const user2 = new GamePiece("Lapid", "1", "2", "avatarz")
//where to inject info
const gameBoard = document.querySelector("#gameBoard");
user1.addInfoToDOM(gameBoard);
user2.addInfoToDOM(gameBoard);

const users = []
//what to do with info submitted by user
function handleSubmit(event) {
    // try {
    //     if (!event.target) throw new Error('must target event'); -not sure what type of error I should be looking for

    event.preventDefault()
    console.dir(event.target);
    const name = event.target.elements.name.value;
    const xpos = Number(event.target.elements.xpos.value);
    const ypos = Number(event.target.elements.ypos.value);
    const url = event.target.elements.url.value;
    const radio = event.target.elements.radio.value;
    //code should be if radio value is on, grab the source img linked to the radio button  
    // } catch (error) {
    //     console.error(error)
    // }
    console.log(name, xpos, ypos, url, radio)
    users.push(new GamePiece(name, xpos, ypos, url, radio));

    console.log(users)

    const gameBoard = document.querySelector("#gameBoard");
    console.log(gameBoard.id)
    users[users.length - 1].addInfoToDOM(gameBoard);

    event.target.reset();


}

// https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png