const getResidents = (): any => {
  let resident: Array<string> = [];

  const showResident = (residents: string): Array<string> | string => {
    if(residents === 'l') return resident
    resident.push(residents);
    return `Welcome ${residents}, now you are the number ${resident.length}`;
  };

  return showResident;
};

const buildingA = getResidents();


const buildingB = getResidents();


const handleSubmitA = (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  console.log(buildingA(name));
};
const handleSubmitB = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    console.log(buildingB(name));
    
  };
  
// const handleSubmitB = (event) => {
//     event.preventDefault();
//     const name = event.target.elements.name.value;
//     console.log(buildingA(name));
//   };