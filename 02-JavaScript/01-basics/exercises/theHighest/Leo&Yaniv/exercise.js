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

let arrayToCheck = [8, -1, 4, 200, 'a'];
console.log(theHighest(arrayToCheck));

arrayToCheck = -1;
console.log(theHighest(arrayToCheck));

arrayToCheck = ['Hello', 'Leo', 'Yaniv'];
console.log(theHighest(arrayToCheck));

arrayToCheck = [-1,-1,-1,-1,-1];
console.log(theHighest(arrayToCheck));
