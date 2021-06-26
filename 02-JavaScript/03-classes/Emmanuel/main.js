class Animal {
    constructor(birthYear, type, sound){
        this.birthYear = birthYear;
        this.type = type;
        this.sound = sound;
    }
    calculateAge(){
        const currentAge = 2021-this.birthYear;
        console.log(currentAge);

    }
    animalTalk(){
        console.log(this.sound)
    }
}


function onSubmit(e) {
    e.preventDefault();
    const birthYear = Number(document.getElementById("birthYear").value);
    const type = document.getElementById("type").value;
    const sound = document.getElementById("sound").value;
    const newAnimal  = new Animal(birthYear, type, sound );
    newAnimal.calculateAge();
    addElementToDom(type,sound,birthYear);
    console.log(newAnimal);
}

function addElementToDom(type,sound,birthYear) {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const node1 = document.createTextNode(type)
    const node2 = document.createTextNode(sound)
    const node3 = document.createTextNode(birthYear)
    box1.appendChild(node1);
    box2.appendChild(node2);
    box3.appendChild(node3);
}

