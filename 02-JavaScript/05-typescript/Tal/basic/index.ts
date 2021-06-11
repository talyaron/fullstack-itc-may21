
var x: string = 'a';
x = 'by';
var arr: Array<number | string> = [1, 2, 3, 'a', 4]
console.log(x);

var add = (a: number, b: number): number => { return a + b; };

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

console.log(add(z.a, z.b));

var root: HTMLElement = document.querySelector('#root');
console.dir(root);

var addToDOM = (htmlElement: HTMLElement, adds: Adds): void => {

    htmlElement.innerText = `add ${adds.a} + ${adds.b} = ${add(adds.a, adds.b)}`;
}
addToDOM(root, w);

var getDayInYear = (date: Date) => {
    let now:Date = date;
    let start:Date = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let  day = Math.floor(diff / oneDay);
    return + day;
}