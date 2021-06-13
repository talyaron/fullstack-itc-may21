var x: string | boolean = false;

x = 'by';
var arr: Array<number | string> = [1, 2, 3, 'a', 4]
console.log(x);

var add = (a: number, b: number): number => { return a + b ; };

// var obj:object = {}
interface Adds {
    a: number,
    b: number
}
var z: Adds = {
    a: 1,
    b: 2
}

var w: Adds = {
    a: 45,
    b: 100
}
var f:number = 23;

console.log(add(z.a, z.b));

var root: HTMLElement = document.querySelector('#root');
console.dir(root);

var addToDOM = (htmlElement: HTMLElement, adds: Adds): void => {

    htmlElement.innerText = `add ${adds.a} + ${adds.b} = ${add(adds.a, adds.b)}`;
}
addToDOM(root, w);

class Person{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    sayName():string{
        return this.name
    }
}


let Raziel = new Person("2");

console.log(Raziel)

