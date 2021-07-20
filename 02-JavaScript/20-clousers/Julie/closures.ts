const submitA = <HTMLElement>document.querySelector("#submitA");
const submitB = <HTMLElement>document.querySelector("#submitB");

submitA.addEventListener("click", getInputValueA);
submitB.addEventListener("click", getInputValueB);

function getInputValueA(ev: any) {
  ev.preventDefault();
  const nameA = <HTMLElement>document.querySelector("#nameA").value;
  console.log(buildingOne(nameA));
}

function getInputValueB(ev: any) {
  ev.preventDefault();
  const nameB = <HTMLElement>document.querySelector("#nameB").value;
  console.log(buildingTwo(nameB));
}

function outsideFunction(building) {
  let residentNumber = 0;
  let residentsArray: any = [];
  function insideFunction(residentName) {
    residentNumber++;
    if (residentName === "l") {
      return residentsArray;
    }
    residentsArray.push(residentName);
    if (residentsArray.length > 1) {
      const lastIndex = residentsArray.length - 1;
      residentsArray[lastIndex] = ` and ${residentsArray[lastIndex]}`;
    }
    return `Hello, ${residentName}, you are resident number ${residentNumber} of ${building} and the residents of your building are ${residentsArray}.`;
  }
  return insideFunction;
}

const buildingOne = outsideFunction("building one");
const buildingTwo = outsideFunction("building two");
