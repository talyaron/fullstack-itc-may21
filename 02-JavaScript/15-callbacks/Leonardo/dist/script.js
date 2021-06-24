//please create array of objects... {name:'aaaa'}
//find a specific object based on name
//and delete one object in the array,
//delete all objects with this name.
//please create array of objects... {name:'aaaa'}
var names = [
    { name: 'Leonardo' },
    { name: 'Martin' },
    { name: 'Juan' },
    { name: 'Leonardo' },
    { name: 'Jose' },
    { name: 'Pedro' },
    { name: 'Leonardo' },
    { name: 'Damian' },
    { name: 'Agustin' }
];
console.log('The original array is:', names);
//find a specific object based on name: Leonardo
var foundName = names.find(function (element) { return element.name === 'Juan'; });
//and delete one object in the array: Juan
function removeJuan() {
    var indexToRemove = names.findIndex(function (element) { return element.name === 'Juan'; });
    names.splice(indexToRemove, 1);
    console.log('The array with out the name Juan:', names);
}
//and delete all object in the array: Leonardo
function removeLeonardos() {
    names.map(function (el, i) {
        if (el.name === 'Leonardo') {
            names.findIndex(function (element) { return element.name === 'Leonardo'; });
            names.splice(i, 1);
            return i;
        }
    });
    console.log('The array with out Leonardos:', names);
}
