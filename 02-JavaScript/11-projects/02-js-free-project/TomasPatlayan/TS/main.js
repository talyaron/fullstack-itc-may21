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
    Cv.prototype.addCv = function (newCv) {
        this.cv.push(newCv);
        this.showCv();
    };
    Cv.prototype.showCv = function () {
        localStorage.getItem("name");
        var printName = document.getElementById("show");
        var ponerCV = "";
        this.cv.forEach(function (ponerCVs) {
            ponerCV += "<h3>" + ponerCVs.name + "</h3>";
        });
        printName.innerHTML = ponerCV;
    };
    return Cv;
}());
var createCV = new Cv();
console.log(createCV);
var handleSubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    localStorage.setItem("name", name);
    window.location.href = "cv.html";
    var cv = new CvGenerator(name);
    console.log(cv);
    createCV.addCv(cv);
};
