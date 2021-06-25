const root = document.querySelector("#show");
const renderPost = JSON.parse(localStorage.getItem("completeCv"));

const render = () => {
  let html: string = "";
  renderPost.forEach((element) => {
    html += `
<div class="container">
  <header class="header">
    <div class="header__text">
      <h1>${element.name}</h1>
      <p>${element.currentlyWorking}</p>
    </div>
  </header>

  <div class="content">
    <div class="content__left-area">
      <div class="contact">
        <h4>CONTACT</h4>
        <h5>Phone</h5>
     <p>${element.contactPhone}</p>

        <h5>E-mail</h5>
        <p>${element.contactMail}</p>

        <h5>Linkedin</h5>
        <p>${element.contactLin}</p>
      </div>

      <div class="skills">
        <h4>Skills</h4>
        <div class="skills__bar">
          <div class="skills__bar__bars">
            <p>${element.skill1}</p>
          </div>

          <div class="skills__bar__bars">
            <p>${element.skill2}</p>
          </div>

          <div class="skills__bar__bars">
            <p>${element.skill3}</p>
          </div>

          <div class="skills__bar__bars">
            <p>${element.skill4}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content__right-area">
      <div class="about">
        <h2>
          <span><i class="far fa-user"></i></span>PERSONAL PROFILE
        </h2>
        <p>
         ${element.personalPrfile}
        </p>
      </div>
      <div class="work">
        <h2>
          <span><i class="fas fa-briefcase"></i></span>WORK EXPERIENCE
        </h2>

        <div class="work__experience">
          <h3>${element.work1}</h3>
          
          
        </div>
        <div class="work__experience">
          <h3>${element.work2}</h3>
          
          
        </div>
        <div class="work__experience">
          <h3>${element.work3}</h3>
          
          
        </div>
        <div class="work__experience">
          <h3>${element.work4}</h3>
          
          
        </div> 
      </div>
      <div class="education">
        <h2>
          <span><i class="fas fa-book"></i></span>EDUCATION
        </h2>
        <div class="education__experience">
          <h4>${element.education1}</h4>
      
        </div>
        <div class="education__experience">
          <h4>${element.education2}</h4>
      
        </div>
        <div class="education__experience">
          <h4>${element.education3}</h4>
      
        </div>
      </div>
    </div>
  </div>
  <button id="btn">Print CV</button> 
</div>
`; //YS: What does the button do?
  });

  console.log(renderPost); //YS: Please don't leave console logs.

  root.innerHTML = html;
  //YS: Use insertAdjacentHTML instead of innerHTML
};

render();
