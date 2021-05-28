// classic
function theHighest(array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        }

        let firstNum = null;
        let i = 0;
        while ((i < array.length) && (typeof array[i] != 'number')) {
            i++;
        }

        if (i == array.length) {
            throw new Error('Your array contains no numbers!');
        }

        firstNum = array[i];

        let j;
        if (i == 0) {
            j = 1;
        } else {
            j = i;
        }

        while ((j < array.length) && (array[j] == array[j - 1])) {
            j++;
        }
        if (j == array.length) {
            throw new Error('Your array elements are all equal!');
        }

        let highest = firstNum;

        for (let k = i; k < array.length; k++) {
            if (isNaN(array[k])) {
                k++;
            } else {
                if (array[k] > highest) {
                    highest = array[k];
                }
            }
        }

        return 'The highest number in the array is: ' + highest + '!';
    } catch (error) {
        return error;
    }
}

// anonymous
let highestNum = function (array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        }

        let firstNum = null;
        let i = 0;
        while ((i < array.length) && (typeof array[i] != 'number')) {
            i++;
        }

        if (i == array.length) {
            throw new Error('Your array contains no numbers!');
        }

        firstNum = array[i];

        let j;
        if (i == 0) {
            j = 1;
        } else {
            j = i;
        }

        while ((j < array.length) && (array[j] == array[j - 1])) {
            j++;
        }
        if (j == array.length) {
            throw new Error('Your array elements are all equal!');
        }

        let highest = firstNum;

        for (let k = i; k < array.length; k++) {
            if (isNaN(array[k])) {
                k++;
            } else {
                if (array[k] > highest) {
                    highest = array[k];
                }
            }
        }

        return 'The highest number in the array is: ' + highest + '!';
    } catch (error) {
        return error;
    }
}

// arrow
let highestInArrow = (array) => {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        }

        let firstNum = null;
        let i = 0;
        while ((i < array.length) && (typeof array[i] != 'number')) {
            i++;
        }

        if (i == array.length) {
            throw new Error('Your array contains no numbers!');
        }

        firstNum = array[i];

        let j;
        if (i == 0) {
            j = 1;
        } else {
            j = i;
        }

        while ((j < array.length) && (array[j] == array[j - 1])) {
            j++;
        }
        if (j == array.length) {
            throw new Error('Your array elements are all equal!');
        }

        let highest = firstNum;

        for (let k = i; k < array.length; k++) {
            if (isNaN(array[k])) {
                k++;
            } else {
                if (array[k] > highest) {
                    highest = array[k];
                }
            }
        }

        return 'The highest number in the array is: ' + highest + '!';
    } catch (error) {
        return error;
    }
}

let arrayToCheck = [8, -1, 4, 200, 'a'];
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));

arrayToCheck = -1;
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));

arrayToCheck = 'This is a string';
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));

arrayToCheck = {
    string: 'This is a string',
    arr: [1, 2, 3],
    boolean: false
};
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));

arrayToCheck = ['Hello', 'Leo', 'Yaniv'];
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));

arrayToCheck = [-1, -1, -1, -1, -1];
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));