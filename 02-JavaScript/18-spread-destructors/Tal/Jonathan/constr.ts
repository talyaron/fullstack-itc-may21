const person = {
    name2: "Dan",
    street: "Herzel"
}

const { name2, street } = person;

console.log("name:", name2)
console.log("street", street)



let [fi, se] = "John S".split(' ')


let x, y;
[x, y] = [10, 20]
console.log(x + y)



//https://dmitripavlutin.com/javascript-object-destructuring/

//https://javascript.info/destructuring-assignment



const volume = {
    height: 1,
    width: 2,
    depth: 3
}

const { height, width, depth } = volume

function calculateVolume({height,width,depth}:{height:number,width:number,depth:number}):number {
    const volume: number = height * width * depth;
    return volume;
}




const BoardVolumeRoot:HTMLElement = document.querySelector('#boardVolume')

let html:string = ""

html+= `<div>The volume of the cubick area is: ${calculateVolume({height, width, depth})}</div>`

BoardVolumeRoot.innerHTML = html
