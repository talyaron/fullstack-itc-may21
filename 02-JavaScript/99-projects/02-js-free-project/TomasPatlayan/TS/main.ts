const inputFile = document.querySelector('input[type="file"]');

class CvGenerator {
  name: string;
  currentlyWorking: string;
  personalPrfile: string;
  contactLin: string;
  contactMail: string;
  contactPhone: number;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  work1: string;
  work2: string;
  work3: string;
  work4: string;
  education1: string;
  education2: string;
  education3: string;

  constructor(
    name: string,
    currentlyWorking: string,
    personalPrfile: string,
    contactLin: string,
    contactMail: string,
    contactPhone: number,
    skill1: string,
    skill2: string,
    skill3: string,
    skill4: string,
    work1: string,
    work2: string,
    work3: string,
    work4: string,
    education1: string,
    education2: string,
    education3: string
  ) {
    this.name = name;
    this.currentlyWorking = currentlyWorking;
    this.personalPrfile = personalPrfile;

    this.contactLin = contactLin;
    this.contactMail = contactMail;
    this.contactPhone = contactPhone;
    this.skill1 = skill1;
    this.skill2 = skill2;
    this.skill3 = skill3;
    this.skill4 = skill4;
    this.work1 = work1;
    this.work2 = work2;
    this.work3 = work3;
    this.work4 = work4;
    this.education1 = education1;
    this.education2 = education2;
    this.education3 = education3;
  }
}

class Cv {
  cv: Array<CvGenerator> = []; //YS: It is better practice to put this in a constructor.

  addCv(add: CvGenerator): void {
    this.cv.push(add);

    localStorage.setItem("completeCv", JSON.stringify(this.cv));
    //FIJARME SI PUEDO PONE EL RENDER ACA
  }
}

const handleSubmit = (event) => {
  event.preventDefault();

  const name: string = event.target.elements.name.value;
  const personalPrfile: string = event.target.elements.personalPrfile.value;
  const currentlyWorking: string = event.target.elements.currentlyWorking.value;

  const contactLin: string = event.target.elements.contactLin.value;
  const contactMail: string = event.target.elements.contactMail.value;
  const contactPhone: number = event.target.elements.contactPhone.value;
  const skill1: string = event.target.elements.skill1.value;
  const skill2: string = event.target.elements.skill2.value;
  const skill3: string = event.target.elements.skill3.value;
  const skill4: string = event.target.elements.skill4.value;
  const work1: string = event.target.elements.work1.value;
  const work2: string = event.target.elements.work2.value;
  const work3: string = event.target.elements.work3.value;
  const work4: string = event.target.elements.work4.value;
  const education1: string = event.target.elements.education1.value;
  const education2: string = event.target.elements.education2.value;
  const education3: string = event.target.elements.education3.value;

  const generator = new CvGenerator(
    name,

    currentlyWorking,
    personalPrfile,
    contactLin,
    contactMail,
    contactPhone,
    skill1,
    skill2,
    skill3,
    skill4,
    work1,
    work2,
    work3,
    work4,

    education1,
    education2,
    education3
  );
  event.target.reset();
  cvs.addCv(generator); //YS: What if the cv is empty?

  window.location.href = "cv.html";

  //RECORDATORIA PREGUNTAR QUE VALORES ASIGNARLE A DIVERSAS VARIABLES MASS HAYA DE STRING NUMBER ETC Y COMO ME DOY CUENTA DE COMO NOOMBRARLAS O SI EXISTE LA DOCUMENTACION DE QUE VA CON CADA UNA
};

const cvs = new Cv(); // YS: This should be in line 103.
