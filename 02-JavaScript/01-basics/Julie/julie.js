let myName = "Julie";

const sentence = "Hello, " + myName + "!";

console.log(sentence);

let greeting = "Hello";

//pure function
function buildSentence(greeting, myName) {
  return greeting + myName + "!";
}

//anonymous function
let buildSentence = function (greeting, myName) {
  return greeting + myName;
};

//arrow function
let buildSentence = (greeting, myName) => {
  return greeting + myName;
};

let showFactorial = (num) => {
  for (i = 0; i <= num; i++) {
    factorial = i * i;
  }

  return factorial;
};
