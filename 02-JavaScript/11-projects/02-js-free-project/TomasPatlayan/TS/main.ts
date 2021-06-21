class CvGenerator {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Cv {
  cv: Array<CvGenerator> = [];

  addCv(add: CvGenerator): void {
    this.cv.push(add);
  }
}
const cvs = new Cv();

const handleSubmit = (event) => {
  event.preventDefault();
  
  const name:string = event.target.elements.name.value;

  const generator = new CvGenerator(name);
  event.target.reset();
  cvs.addCv(generator)
  localStorage.setItem("completeCv", JSON.stringify(cvs))
  window.location.href = 'cv.html'
  console.log(cvs);
  //RECORDATORIA PREGUNTAR QUE VALORES ASIGNARLE A DIVERSAS VARIABLES MASS HAYA DE STRING NUMBER ETC Y COMO ME DOY CUENTA DE COMO NOOMBRARLAS O SI EXISTE LA DOCUMENTACION DE QUE VA CON CADA UNA 
};

// class CvGenerator {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Cv {
//   cv: Array<CvGenerator> = [];

//   addCv(newCv: CvGenerator): void {
//     this.cv.push(newCv);
//     this.showCv();
//   }

//   showCv() {
//   localStorage.getItem("name");
//   const printName = document.getElementById("show");

//     let ponerCV: any = "";

//     this.cv.forEach((ponerCVs) => {
//       ponerCV += `<h3>${ponerCVs.name}</h3>`;
//     });
//     printName.innerHTML = ponerCV;
//   }
// }

// const createCV = new Cv();

// console.log(createCV);

// const handleSubmit = (event: any): void => {
//   event.preventDefault();

//   const name: string = event.target.elements.name.value;
//   localStorage.setItem("name",JSON.stringify(name) );

//   window.location.href = "cv.html";

//   const cv = new CvGenerator(name);
//   console.log(cv);

//   createCV.addCv(cv);
// };
