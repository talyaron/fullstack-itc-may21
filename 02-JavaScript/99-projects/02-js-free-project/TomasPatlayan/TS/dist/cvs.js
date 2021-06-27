var root = document.querySelector("#show");
var renderPost = JSON.parse(localStorage.getItem("completeCv"));
var render = function () {
    var html = "";
    renderPost.forEach(function (element) {
        html += "\n<div class=\"container\">\n  <header class=\"header\">\n    <div class=\"header__text\">\n      <h1>" + element.name + "</h1>\n      <p>" + element.currentlyWorking + "</p>\n    </div>\n  </header>\n\n  <div class=\"content\">\n    <div class=\"content__left-area\">\n      <div class=\"contact\">\n        <h4>CONTACT</h4>\n        <h5>Phone</h5>\n     <p>" + element.contactPhone + "</p>\n\n        <h5>E-mail</h5>\n        <p>" + element.contactMail + "</p>\n\n        <h5>Linkedin</h5>\n        <p>" + element.contactLin + "</p>\n      </div>\n\n      <div class=\"skills\">\n        <h4>Skills</h4>\n        <div class=\"skills__bar\">\n          <div class=\"skills__bar__bars\">\n            <p>" + element.skill1 + "</p>\n          </div>\n\n          <div class=\"skills__bar__bars\">\n            <p>" + element.skill2 + "</p>\n          </div>\n\n          <div class=\"skills__bar__bars\">\n            <p>" + element.skill3 + "</p>\n          </div>\n\n          <div class=\"skills__bar__bars\">\n            <p>" + element.skill4 + "</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content__right-area\">\n      <div class=\"about\">\n        <h2>\n          <span><i class=\"far fa-user\"></i></span>PERSONAL PROFILE\n        </h2>\n        <p>\n         " + element.personalPrfile + "\n        </p>\n      </div>\n      <div class=\"work\">\n        <h2>\n          <span><i class=\"fas fa-briefcase\"></i></span>WORK EXPERIENCE\n        </h2>\n\n        <div class=\"work__experience\">\n          <h3>" + element.work1 + "</h3>\n          \n          \n        </div>\n        <div class=\"work__experience\">\n          <h3>" + element.work2 + "</h3>\n          \n          \n        </div>\n        <div class=\"work__experience\">\n          <h3>" + element.work3 + "</h3>\n          \n          \n        </div>\n        <div class=\"work__experience\">\n          <h3>" + element.work4 + "</h3>\n          \n          \n        </div> \n      </div>\n      <div class=\"education\">\n        <h2>\n          <span><i class=\"fas fa-book\"></i></span>EDUCATION\n        </h2>\n        <div class=\"education__experience\">\n          <h4>" + element.education1 + "</h4>\n      \n        </div>\n        <div class=\"education__experience\">\n          <h4>" + element.education2 + "</h4>\n      \n        </div>\n        <div class=\"education__experience\">\n          <h4>" + element.education3 + "</h4>\n      \n        </div>\n      </div>\n    </div>\n  </div>\n  <button id=\"btn\">Print CV</button> \n</div>\n"; //YS: What does the button do?
    });
    console.log(renderPost); //YS: Please don't leave console logs.
    root.innerHTML = html;
    //YS: Use insertAdjacentHTML instead of innerHTML
};
render();
