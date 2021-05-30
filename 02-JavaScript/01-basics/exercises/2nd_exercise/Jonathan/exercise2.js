//1) create a function for finding the median in an array. (https://www.mathsisfun.com/median.html)

let arr = [1, 2]

//order the list first

try {

    if (!Array.isArray(arr)) throw new Error('the argument is not an array')

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    })

    //function getMedium // ArrowMethod

    let getMedianbyFirst = (arr) => {

        try {

            let sumi = 0;

            if (arr.length === 1) throw new Error('you have only one argument in the array')
            //odd situation
            if (arr.length % 2 !== 0) {
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') throw new Error('an element is not a number')
                    if (arr[i] < 0) throw new Error('an element is a negative number')
                    sumi += i;
                }
                const count = arr.length;
                const medium = arr[sumi / count]
                return medium;

            } else {
                //even situation  
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') throw new Error('an element is not a number')
                    if (arr[i] < 0) throw new Error('an element is a negative number')
                    sumi += i;
                }
                const count = arr.length;
                const medium = (arr[Math.round(sumi / count) - 1] + arr[Math.round(sumi / count)]) / 2
                return medium;
            }
        }
        catch (error) {
            console.log(error);
            return 0;
        }
    }

    median = getMedianbyFirst(sortedArr)
    console.log(`The median is ${median}`);

} catch (error) {
    console.log(error);
}


//Anonymous Method

try {

    if (!Array.isArray(arr)) throw new Error('the argument is not an array')

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    })

    //function getMedium // ArrowMethod

    let getMedianbySecond = function (arr) {

        try {

            let sumi = 0;
            if (arr.length === 1) throw new Error('you have only one argument in the array')

            //odd situation
            if (arr.length % 2 !== 0) {
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') throw new Error('an element is not a number')
                    if (arr[i] < 0) throw new Error('an element is a negative number')
                    sumi += i;
                }
                const count = arr.length;
                const medium = arr[sumi / count]
                return medium;

            } else {
                //even situation  
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') throw new Error('an element is not a number')
                    if (arr[i] < 0) throw new Error('an element is a negative number')
                    sumi += i;
                }
                const count = arr.length;
                const medium = (arr[Math.round(sumi / count) - 1] + arr[Math.round(sumi / count)]) / 2
                return medium;
            }
        }
        catch (error) {
            console.log(error);
            return 0;
        }
    }

    median = getMedianbySecond(sortedArr)
    console.log(`The median is ${median}`);

} catch (error) {
    console.log(error);
}

// Simple Method

try {

    if (!Array.isArray(arr)) throw new Error('the argument is not an array')

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    })

    //function getMedium // ArrowMethod

    function getMedianbyThird(arr) {

        try {

            //let sumi = 0;
            if (arr.length === 1) throw new Error('you have only one argument in the array')
            //odd situation
            if (arr.length % 2 !== 0) {
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') throw new Error('an element is not a number')
                    if (arr[i] < 0) throw new Error('an element is a negative number')
                    //sumi += i;
                }
                const count = arr.length;
                //const medium = arr[sumi / count]
                const medium = arr[(count - 1) / 2];
                return medium;

            } else {
                //even situation  
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== 'number') throw new Error('an element is not a number')
                    if (arr[i] < 0) throw new Error('an element is a negative number')
                    //sumi += i;
                }
                const count = arr.length;
                const medium = (arr[(count) / 2] + arr[[(count) / 2] - 1]) / 2
                return medium;
            }
        }
        catch (error) {
            console.log(error);
            return 0;
        }
    }

    console.log("The median is " + getMedianbyThird(sortedArr));

} catch (error) {
    console.log(error);
}




//2) create a function that take an object and return an array with the values of the object in an array.


//Arrow

let obj = { a: { a: 1, b: 2 }, b: [1, 2], c: 2, d: false, e: true, f: 'e' }

let firstArray = (obj) => {

    try {

        if (typeof (obj) !== "object") throw new Error('the argument is not an object')

        if (Array.isArray(obj)) throw new Error('the argument is an array and not an object')

        let arr = []

        for (let i in obj) {
            arr.push(obj[i])
        }
        return arr
    } catch (error) {
        console.log(error);
        return 0
    }
}

x = firstArray(obj)
console.log(x)

//Anonymous

let secondArray = (obj) => {

    try {

        if (typeof (obj) !== "object") throw new Error('the argument is not an object')

        if (Array.isArray(obj)) throw new Error('the argument is an array and not an object')

        let arr = []

        for (let i in obj) {
            arr.push(obj[i])
        }
        return arr
    } catch (error) {
        console.log(error);
        return 0
    }
}

x = secondArray(obj)
console.log(x)

//Simple

function thirdArray(obj) {

    try {

        if (typeof (obj) !== "object") throw new Error('the argument is not an object')

        if (Array.isArray(obj)) throw new Error('the argument is an array and not an object')

        let arr = []

        for (let i in obj) {
            arr.push(obj[i])
        }
        return arr
    } catch (error) {
        console.log(error);
        return 0
    }
}

x = thirdArray(obj)
console.log(x)


/*

let z = (obj) =>{
    return Object.values(obj)
}

y = z(obj)
console.log(y)

*/
