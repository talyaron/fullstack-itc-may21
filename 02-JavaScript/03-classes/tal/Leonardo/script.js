class People {

    constructor(id, name, age, height) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

let person01 = new People('#p1','Carlos',44,1.75);
let person02 = new People('#p2','Pedro',57,1.90);
let person03 = new People('#p3','Juan',42,1.65);
let person04 = new People('#p4','Pepe',27,1.84);

person01 = document.createElement('div');
person02 = document.createElement('div');
person03 = document.createElement('div');
person04 = document.createElement('div');
