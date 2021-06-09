for (let i = 0; i < 5; i++) {
    let a = 5;
}
console.log(a) // will give an undefined error 



x = 2; //error

let x = 4;

console.log(x);
x = 'hello';
console.log(x);

const y = 7;


x = [1, 5, 'ff', '23', y]; //array

console.log(x)

console.log(x[2])

x = {
    a: 1,
    b: 2,
    c: y
}

console.log(x)
let position = 'b';
console.log(x.c);
console.log(x[position]);

