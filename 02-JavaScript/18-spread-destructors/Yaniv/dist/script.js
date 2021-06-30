//create a function which get height, width, deepth (all of type number). the function returns the qubick volume
//which equals to height * width * deepth
//do it with destucotr
var getVol = function (dimentions) {
    try {
        var h = dimentions.h, w = dimentions.w, d = dimentions.d;
        var volume = h * w * d;
        return volume;
    }
    catch (error) {
    }
};
var myCube = { h: 10, w: 5, d: 8 };
console.log(getVol(myCube));
var mySecondCube = { h: 3, w: 19, d: 6 };
console.log(getVol(mySecondCube));
