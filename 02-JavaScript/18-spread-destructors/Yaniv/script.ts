//create a function which get height, width, deepth (all of type number). the function returns the qubick volume
//which equals to height * width * deepth
//do it with destucotr

interface ThreeD {
    h: number,
    w: number,
    d: number
}

const getVol = (dimentions: ThreeD) : number => {
    try {
        const {h, w, d} = dimentions
        const volume = h*w*d;
        return volume;
    } catch (er) {
        console.error(er);
    }
  }

const myCube: ThreeD = {h:10,w:5,d:8};
console.log(getVol(myCube));

const mySecondCube: ThreeD = {h:3,w:19,d:6};
console.log(getVol(mySecondCube));
