const x={a:1};
const y=x;
console.log(y.a);
x.a=200;
console.log(x.a);
console.log(y.a);

const a:Array<number>=[1,2,3,5,6];

const b=a;
console.log(b[2]);
b[3]=4;
console.log(a[3]);