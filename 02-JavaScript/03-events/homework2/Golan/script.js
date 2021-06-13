class GamePiece {
    constructor(name, xpos, ypos, avatar) {
        try {
            if (typeof name !== "string") throw new Error("name isn't a string!");
            if (typeof xpos !== "number") throw new Error("xpos isn't a number!");
            if (typeof ypos !== "number") throw new Error("ypos isn't a number!");
            if (typeof avatar !== "url") throw new Error("avatar isnt a url!");
            this.name = name;
            this.xpos = xpos;
            this.ypos = ypos;
            this.avatar = avatar;
            //this.url? (how to differentiate url and radio selection?)
        } catch (error) {
            console.error(error);
        }
    }
    //declare info to be logged
    info() {
        const userInfo = `You submitted: ${this.name}, ${this.xpos}, ${this.ypos}, ${this.avatar}`;
        console.log(userInfo);
    }
    //declare info to be injected to DOM after the user submits
    addInfoToDOM(domElement) {
        domElement.innerHTML += `<p>${this.name} submitted  ${this.xpos},${this.ypos},${this.avatar}`
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
        const xpos = event.target.elements.xpos.valueAsNumber;
        const ypos = event.target.elements.ypos.valueAsNumber;
        const url = event.target.elements.url.value;
        const radio = event.target.elements.radio.value;
    // } catch (error) {
    //     console.error(error)
    // }
        users.push(new GamePiece(name, xpos, ypos, url, radio));

        console.log(users)

        const gameBoard = document.querySelector("#gameBoard");
        console.log(gameBoard.id)
        users[users.length - 1].addInfoToDOM(gameBoard);

        event.target.reset();


    }