// 1) create a function for finding the median in an array. (https://www.mathsisfun.com/median.html)
// 2) create a function that take an object and return an array with the values of the object in an array.

// generate them in the three ways (simple, anonymous, arrow)

// 1)

function orderArr(array) {
    try {
        // debugger;
        let tempElmntValue;
        for (j = 0; j < array.length; j++) {
            for (let i = 0; i < (array.length - j); i++) {
                if (array[i] > array[array.length - j]) {
                    tempElmntValue = array[array.length - j];
                    array[array.length - j] = array[i];
                    array[i] = tempElmntValue;
                }
            }
        }

        return array;

    } catch (error) {
        return error;
    }
}

// simple
function findMedSimple(array) {
    try {
        // debugger;
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        }
        if (array.length === 1) {
            throw new Error('Your array only has one element...');
        }

        let firstNum = null;
        let i = 0;
        while ((i < array.length) && (typeof array[i] === 'number')) {
            i++;
        }

        if (i != array.length) {
            throw new Error('Your array has elements which are not numbers!');
        }

        // const orderedArr = array;
        // orderedArr.sort(function (a, b) { // this way the orderArr function is redundant
        //     return a - b;
        // });
        const orderedArr = orderArr(array);
        let median;
        if (Number.isInteger(orderedArr.length / 2)) {
        // if (orderedArr % 2 == 0) {
            median = (orderedArr[(orderedArr.length / 2 - 1)] + orderedArr[(orderedArr.length / 2)]) / 2;
        } else {
            median = orderedArr[(orderedArr.length / 2 - 0.5)];
        }

        return median;

    } catch (error) {
        return error;
    }
}

// anonymous
let findMedAnonymous = function (array) {
    try {
        // debugger;
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        }
        if (array.length === 1) {
            throw new Error('Your array only has one element...');
        }

        let firstNum = null;
        let i = 0;
        while ((i < array.length) && (typeof array[i] === 'number')) {
            i++;
        }

        if (i != array.length) {
            throw new Error('Your array has elements which are not numbers!');
        }

        const orderedArr = orderArr(array);
        let median;
        if (Number.isInteger(orderedArr.length / 2)) {
            median = (orderedArr[(orderedArr.length / 2 - 1)] + orderedArr[(orderedArr.length / 2)]) / 2;
        } else {
            median = orderedArr[(orderedArr.length / 2 - 0.5)];
        }

        return median;

    } catch (error) {
        return error;
    }
}

// arrow
let findMedArrow = (array) => {
    try {
        // debugger;
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        }
        if (array.length === 1) {
            throw new Error('Your array only has one element...');
        }

        let firstNum = null;
        let i = 0;
        while ((i < array.length) && (typeof array[i] === 'number')) {
            i++;
        }

        if (i != array.length) {
            throw new Error('Your array has elements which are not numbers!');
        }

        const orderedArr = orderArr(array);
        let median;
        if (Number.isInteger(orderedArr.length / 2)) {
            median = (orderedArr[(orderedArr.length / 2 - 1)] + orderedArr[(orderedArr.length / 2)]) / 2;
        } else {
            median = orderedArr[(orderedArr.length / 2 - 0.5)];
        }

        return median;

    } catch (error) {
        return error;
    }
}

// valid input
let arrayToCheck = [6, 5, 4, 1, 2, 58];
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));

// invalid check 1
arrayToCheck = [6, 5, 'a', 1, 2, 58];
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));

// invalid check 2
arrayToCheck = [6];
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));

// invalid check 3
arrayToCheck = 23;
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));


// 2)

// simple
function objToArrSimple(object) {
    try {
        if (typeof object !== 'object') {
            throw new Error('Please enter an object!');
        }
        let array = [];
        let key;
        for (key in object) {
            array.push(object[key]);
        }

        return array;

    } catch (error) {
        return error;
    }
}

// anonymous
let objToArrAnonymous = function (object) {
    try {
        if (typeof object !== 'object') {
            throw new Error('Please enter an object!');
        }
        let array = [];
        let key;
        for (key in object) {
            array.push(object[key]);
        }

        // array = Object.values(object); // can replace lines 195-198

        return array;


    } catch (error) {
        return error;
    }
}

// arrow
let objToArrArrow = (object) => {
    try {
        if (typeof object !== 'object') {
            throw new Error('Please enter an object!');
        }
        let array = [];
        let key;
        for (key in object) {
            array.push(object[key]);
        }

        return array;

    } catch (error) {
        return error;
    }
}

// valid input
let objectToCheck = {
    num: 4,
    str: 'hi',
    arr: [1, 2, 3],
    bln: false,
    udf: undefined,
    nll: null,
    obj: {
        1: 'yo',
        2: 42
    }
}
console.log('simple: ' + objToArrSimple(objectToCheck));
console.log('anonymous: ' + objToArrAnonymous(objectToCheck));
console.log('arrow: ' + objToArrArrow(objectToCheck));

// invalid input check
objectToCheck = "Guess what - I'm not an object! Muhahaha!!";
console.log('simple: ' + objToArrSimple(objectToCheck));
console.log('anonymous: ' + objToArrAnonymous(objectToCheck));
console.log('arrow: ' + objToArrArrow(objectToCheck));