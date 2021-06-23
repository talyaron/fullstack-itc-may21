// Simple function
function Name1(arg1 = "", arg2 = "", arg3 = "") {  //YS: Dont start a function with capital letter. 
  return arg1 + arg2 + arg3;
}
const x = Name1("Hello", " , ", "Refael!");
console.log(x);

// anonymous function
let Name2 = function (arg1, arg2, arg3) { //YS: Use const for functions. Also instead of including a comma as an arg, you can include it in the return statement instead (replace it with arg2) 
  return arg1 + arg2 + arg3;
};

const Y = Name2("Hello", " , ", "Refael!");
console.log(Y);

// arrow function
const Name3 = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
};
const Z = Name3("Hello", " , ", "Refael!");
console.log(Z);

// Factorial function
const factor = (num) => {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
factor(); //YS: I didnt undestand why you called it here without any parameters. 
console.log(factor(7));
