// classic
function theHighest(array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        } else {
            notNumbersCounter = 0;
            for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i])) {
                    notNumbersCounter++;
                }
            }
            if (notNumbersCounter == array.length) {
                throw new Error('Your array contains no numbers!');
            } else {
                i = 1;
                while ((i < array.length) && (array[i] == array[i - 1])) {
                    i++;
                }
                if (i == array.length) {
                    throw new Error('Your array elements are all equal!');
                }
            }
        }

        let firstNum;

        for (let i = 1; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                firstNum = array[i];
                break;
            }
        }

        let highest = firstNum;

        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i])) {
                i++;
            } else {
                if (array[i] > highest) {
                    highest = array[i];
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
        } else {
            notNumbersCounter = 0;
            for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i])) {
                    notNumbersCounter++;
                }
            }
            if (notNumbersCounter == array.length) {
                throw new Error('Your array contains no numbers!');
            } else {
                i = 1;
                while ((i < array.length) && (array[i] == array[i - 1])) {
                    i++;
                }
                if (i == array.length) {
                    throw new Error('Your array elements are all equal!');
                }
            }
        }

        let firstNum;

        for (let i = 1; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                firstNum = array[i];
                break;
            }
        }

        let highest = firstNum;

        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i])) {
                i++;
            } else {
                if (array[i] > highest) {
                    highest = array[i];
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
        } else {
            notNumbersCounter = 0;
            for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i])) {
                    notNumbersCounter++;
                }
            }
            if (notNumbersCounter == array.length) {
                throw new Error('Your array contains no numbers!');
            } else {
                i = 1;
                while ((i < array.length) && (array[i] == array[i - 1])) {
                    i++;
                }
                if (i == array.length) {
                    throw new Error('Your array elements are all equal!');
                }
            }
        }

        let firstNum;

        for (let i = 1; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                firstNum = array[i];
                break;
            }
        }

        let highest = firstNum;

        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i])) {
                i++;
            } else {
                if (array[i] > highest) {
                    highest = array[i];
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