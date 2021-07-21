function addResident(residentNumber:number) {
    let residentArray:Array<string> = [];
    function _addResident(residentName:string) {
        debugger;
        if(residentName === 'l'){
            return `Here Are a List of Current Residents: ${residentArray}`;
        }else if (residentName === '') {
          throw new Error ("No Name Entered")
        }
        else{
        residentArray.push(` ${residentName}`)
        residentNumber++;
        return `Hello ${residentName}, you are resident number ${residentNumber}`
    }}
    return _addResident
}

const buildingA = addResident(0) 
function handleResidentBA(ev:any):void{
    try {
      ev.preventDefault()
      const resident: string = ev.target.children.resident.value;
      const buildingADisplay:Element = document.querySelector(".buildingA")
      buildingADisplay.innerHTML = buildingA(resident)
      ev.target.reset();
    } catch (error) {
      console.error(error);
    }
  }
  const buildingAForm:Element = document.querySelector("#building-A")
  buildingAForm.addEventListener("submit", handleResidentBA)

  const buildingB = addResident(0) 
  function handleResidentBB(ev:any):void{
      try {
        ev.preventDefault()
        const resident: string = ev.target.children.resident.value;
        const buildingBDisplay:Element = document.querySelector(".buildingB")
        buildingBDisplay.innerHTML = buildingB(resident)
        ev.target.reset();
      } catch (error) {
        console.error(error);
      }
    }
    const buildingBForm:Element = document.querySelector("#building-B")
    buildingBForm.addEventListener("submit", handleResidentBB)

