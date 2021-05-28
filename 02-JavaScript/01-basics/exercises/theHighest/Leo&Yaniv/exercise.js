// classic
function theHighest(array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Please enter an array!');
        } else {
            notNumbersCounter = 0;
            isAllEqual = false;
            for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i])) {
                    notNumbersCounter++;
                }
                if ((i > 1) && (array[i] == array[i-1])) {
                    isAllEqual = true;
                }
                else {
                    isAllEqual = false;
                }
            }
            if (notNumbersCounter == array.length) {
                throw new Error('Your array contains no numbers!');
            }
            if (isAllEqual == true) {
                throw new Error('Your array elements are all equal!');
            }
        }

        let highest = 0;

        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i])) {i++;}
            else {
                if (array[i] > highest) {highest = array[i];}
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
            isAllEqual = false;
            for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i])) {
                    notNumbersCounter++;
                }
                if ((i > 1) && (array[i] == array[i-1])) {
                    isAllEqual = true;
                }
                else {
                    isAllEqual = false;
                }
            }
            if (notNumbersCounter == array.length) {
                throw new Error('Your array contains no numbers!');
            }
            if (isAllEqual == true) {
                throw new Error('Your array elements are all equal!');
            }
        }

        let highest = 0;

        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i])) {i++;}
            else {
                if (array[i] > highest) {highest = array[i];}
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
            isAllEqual = false;
            for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i])) {
                    notNumbersCounter++;
                }
                if ((i > 1) && (array[i] == array[i-1])) {
                    isAllEqual = true;
                }
                else {
                    isAllEqual = false;
                }
            }
            if (notNumbersCounter == array.length) {
                throw new Error('Your array contains no numbers!');
            }
            if (isAllEqual == true) {
                throw new Error('Your array elements are all equal!');
            }
        }

        let highest = 0;

        for (let i = 1; i < array.length; i++) {
            if (isNaN(array[i])) {i++;}
            else {
                if (array[i] > highest) {highest = array[i];}
            }
        }

        return 'The highest number in the array is: ' + highest + '!';
    } catch (error) {
        return error;
    }
}

let arrayToCheck = [8, -1, 4, 200, 'a'];
console.log(theHighest(arrayToCheck));
console.log(highestNum(arrayToCheck));
console.log(highestInArrow(arrayToCheck));

arrayToCheck = -1;
console.log(theHighest(arrayToCheck));
console.log(highestNum(arrayToCheck));
console.log(highestInArrow(arrayToCheck));

arrayToCheck = 'This is a string';
console.log(theHighest(arrayToCheck));
console.log(highestNum(arrayToCheck));
console.log(highestInArrow(arrayToCheck));

arrayToCheck = {string:'This is a string',arr:[1,2,3],boolean:false};
console.log(theHighest(arrayToCheck));
console.log(highestNum(arrayToCheck));
console.log(highestInArrow(arrayToCheck));

arrayToCheck = ['Hello', 'Leo', 'Yaniv'];
console.log(theHighest(arrayToCheck));
console.log(highestNum(arrayToCheck));
console.log(highestInArrow(arrayToCheck));

arrayToCheck = [-1,-1,-1,-1,-1];
console.log(theHighest(arrayToCheck));
console.log(highestNum(arrayToCheck));
console.log(highestInArrow(arrayToCheck));
