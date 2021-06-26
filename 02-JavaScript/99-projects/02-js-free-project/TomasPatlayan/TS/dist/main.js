var inputFile = document.querySelector('input[type="file"]');
var CvGenerator = /** @class */ (function () {
    function CvGenerator(name, currentlyWorking, personalPrfile, contactLin, contactMail, contactPhone, skill1, skill2, skill3, skill4, work1, work2, work3, work4, education1, education2, education3) {
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
    return CvGenerator;
}());
var Cv = /** @class */ (function () {
    function Cv() {
        this.cv = []; //YS: It is better practice to put this in a constructor.
    }
    Cv.prototype.addCv = function (add) {
        this.cv.push(add);
        localStorage.setItem("completeCv", JSON.stringify(this.cv));
        //FIJARME SI PUEDO PONE EL RENDER ACA
    };
    return Cv;
}());
var handleSubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var personalPrfile = event.target.elements.personalPrfile.value;
    var currentlyWorking = event.target.elements.currentlyWorking.value;
    var contactLin = event.target.elements.contactLin.value;
    var contactMail = event.target.elements.contactMail.value;
    var contactPhone = event.target.elements.contactPhone.value;
    var skill1 = event.target.elements.skill1.value;
    var skill2 = event.target.elements.skill2.value;
    var skill3 = event.target.elements.skill3.value;
    var skill4 = event.target.elements.skill4.value;
    var work1 = event.target.elements.work1.value;
    var work2 = event.target.elements.work2.value;
    var work3 = event.target.elements.work3.value;
    var work4 = event.target.elements.work4.value;
    var education1 = event.target.elements.education1.value;
    var education2 = event.target.elements.education2.value;
    var education3 = event.target.elements.education3.value;
    var generator = new CvGenerator(name, currentlyWorking, personalPrfile, contactLin, contactMail, contactPhone, skill1, skill2, skill3, skill4, work1, work2, work3, work4, education1, education2, education3);
    event.target.reset();
    cvs.addCv(generator); //YS: What if the cv is empty?
    window.location.href = "cv.html";
    //RECORDATORIA PREGUNTAR QUE VALORES ASIGNARLE A DIVERSAS VARIABLES MASS HAYA DE STRING NUMBER ETC Y COMO ME DOY CUENTA DE COMO NOOMBRARLAS O SI EXISTE LA DOCUMENTACION DE QUE VA CON CADA UNA
};
var cvs = new Cv(); // YS: This should be in line 103.
