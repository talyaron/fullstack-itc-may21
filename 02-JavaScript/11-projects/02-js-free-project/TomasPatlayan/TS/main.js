var CvGenerator = /** @class */ (function () {
    function CvGenerator(name) {
        this.name = name;
    }
    return CvGenerator;
}());
var Cv = /** @class */ (function () {
    function Cv() {
        this.cv = [];
    }
    Cv.prototype.addCv = function (add) {
        this.cv.push(add);
        console.log(this.cv);
        localStorage.setItem("completeCv", JSON.stringify(this.cv));
    };
    return Cv;
}());
var handleSubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var generator = new CvGenerator(name);
    // event.target.reset();
    cvs.addCv(generator);
    window.location.href = 'cv.html';
    //RECORDATORIA PREGUNTAR QUE VALORES ASIGNARLE A DIVERSAS VARIABLES MASS HAYA DE STRING NUMBER ETC Y COMO ME DOY CUENTA DE COMO NOOMBRARLAS O SI EXISTE LA DOCUMENTACION DE QUE VA CON CADA UNA 
};
var cvs = new Cv();
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
