class CvGenerator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class Cv {
  cv: Array<CvGenerator> = [];

  addCv(newCv: CvGenerator): void {
    this.cv.push(newCv);
    this.showCv();
  }

  showCv() {
    localStorage.getItem("name");
    const printName = document.getElementById("show");

    let ponerCV: string = "";

    this.cv.forEach((ponerCVs) => {
      ponerCV += `<h3>${ponerCVs.name}</h3>`;
    });
    printName.innerHTML = ponerCV;
  }
}

const createCV = new Cv();

console.log(createCV);

const handleSubmit = (event: any): void => {
  event.preventDefault();

  const name: string = event.target.elements.name.value;
  localStorage.setItem("name", name);

  window.location.href = "cv.html";

  const cv = new CvGenerator(name);
  console.log(cv);

  createCV.addCv(cv);
};
