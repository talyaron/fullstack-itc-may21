//please create array of objects... {name:'aaaa'}
//1. find a specific object based on name and delete one object in the array.
//2. delete all objects with this name.

interface Name {
    name: string;
}

let arrayToSearchIn: Array<Name> = [{name:'Raziel'},{name:'Tal'},{name:'Yarden'},{name:'Yehuda'},{name:'Avromi'},{name:'Efrayim'},{name:'Refael'},{name:'Jonathan'},{name:'Tomas'},{name:'Eric'},{name:'Tomas'},{name:'Golan'},{name:'Julie'},{name:'Emmanuel'},{name:'Leo'}];

console.log(arrayToSearchIn);

// 1.
const golanIndex = arrayToSearchIn.findIndex(item => item.name === 'Golan');

arrayToSearchIn.splice(golanIndex,1);

console.log(arrayToSearchIn);

// 2.
arrayToSearchIn = arrayToSearchIn.filter(item => item.name !== 'Tomas');

console.log(arrayToSearchIn);