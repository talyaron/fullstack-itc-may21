class Run {
  runDistance: number;
  runTime: Date; // including hour
  runArea: string;
  runMatch: boolean = false;
  runId: string = "run" + Math.random().toString(16).slice(2);
  runRunnerId: string = JSON.parse(localStorage.getItem("currentRunner"))
    .runnerId;

  constructor(runDistance: number, runTime: Date, runArea: string) {
    this.runDistance = runDistance;
    this.runTime = runTime;
    this.runArea = runArea;
  }
}

document.querySelector("#total_sum").innerHTML = "0"; // for the future - get from localStorage if registered
document.querySelector("#total_counts").innerHTML = "0"; // for the future - get from localStorage if registered

interface Preferences {
  // For the future
  prefChat: string; // chatty, here and there, only when necessary, All (default)
  prefGender: string; // Male, Female, All (default)
  prefAgeGroup: string; // Like me, All (default)
}

interface Shoes {
  shoesBrand: string;
  shoesModel: string;
  shoesDistance: number;
}

class LoggedInRunner {
  // generated on the registration page - passed on to other pages via localStorage
  runnerName: string = JSON.parse(localStorage.getItem("currentRunner")).runnerName; // required on registration
  runnerId: string = JSON.parse(localStorage.getItem("currentRunner")).runnerId; // generated on registration
  runnerEmail: string = JSON.parse(localStorage.getItem("currentRunner")).runnerEmail; // required on registration
  runnerPassword: string = JSON.parse(localStorage.getItem("currentRunner")).runnerPassword; // required on registration
  runnerGender: string = JSON.parse(localStorage.getItem("currentRunner")).runnerGender; // Male, Female, Unknown (default) - TODO add method editDetails
  runnerAgeGroup: string = JSON.parse(localStorage.getItem("currentRunner")).runnerAgeGroup; // 15-19, 20's, 30's, 40's, 50's, 60's, Unknown (default) - TODO add method editDetails
  runnerChat: string = JSON.parse(localStorage.getItem("currentRunner")).runnerChat; // chatty, so so, only when necessary, Unknown (default) - TODO add method editDetails
  runnerPref: Preferences = JSON.parse(localStorage.getItem("currentRunner")).runnerPref; // default on registration - TODO add method to edit
  runnerProfImg: string = JSON.parse(localStorage.getItem("currentRunner")).runnerProfImg; // TODO add method editDetails
  runnerShoes: Shoes; // TODO add method editDetails
  runnerRuns: Array<Run> = JSON.parse(localStorage.getItem("currentRunner")).runnerRuns; // empty on registration
  runnerRunsHtml: string = JSON.parse(localStorage.getItem("currentRunner")).runnerRunsHtml; // DOM representation of all runs - new runs to DOM are added to this innerHTML
  runnerDistance: number = Number(document.querySelector("#total_sum").innerHTML
  );

  personalDetailsToDOM() : void {
    const mainTitle: HTMLElement = document.querySelector("title");
    const runnerNameContainter: HTMLElement = document.querySelector(".summary__item--runner_name");    
    const runnerProfileImg: HTMLElement = document.querySelector(".profile_image__item--profile_image");    
    const runnerRunsDOM: HTMLElement = document.querySelector(".runs");

    mainTitle.insertAdjacentHTML('afterbegin',`${this.runnerName}`);
    runnerNameContainter.insertAdjacentHTML('beforeend',`${this.runnerName}!`);
    runnerProfileImg.title = `${this.runnerName}`;
    runnerProfileImg.setAttribute("src",this.runnerProfImg)
    runnerRunsDOM.innerHTML = this.runnerRunsHtml;
  }

  addRun(run: Run): void {
    this.runnerRuns.push(run);
    this.runnerRuns.sort((a : any, b : any) => b.runTime - a.runTime);
    this.addRunToDOM(run);
    this.refreshTotalToDOM(run.runDistance);
  }

  addRunToDOM(run: Run) {
    try {
      const runsContainer: HTMLElement = document.querySelector(".runs");
      const matchFAClass = run.runMatch ? "check-double" : "check";
      const matchTitle = run.runMatch ? "Partner found!" : "Pending partner...";
      const runColor = run.runMatch ? "aqua" : "orange";
      const runFormatedDate = `${run.runTime.toISOString().substring(0,16).replace('T',' ')}`;

      const runsHTML = `<div class="runs__item runs__item--action">
      <i id="match" class="fas fa-2x fa-${matchFAClass}-circle" title="${matchTitle}" style="color: ${runColor};"></i>
      <div id="runs_amount" style="color: ${runColor};">
        ${Math.abs(run.runDistance)} Km
      </div>
      <div id="run_time">${runFormatedDate}</div>
      <div id="runs_area">${run.runArea}</div>
    </div>`;

      runsContainer.insertAdjacentHTML("afterbegin", runsHTML);
      this.runnerRunsHtml = runsContainer.innerHTML;

      const totalRunsContainer: HTMLElement = document.querySelector("#total_counts");
      totalRunsContainer.innerText = `${this.runnerRuns.length}`;
    } catch (er) {
      console.error(er);
    }
  }

  refreshTotalToDOM(runDistance: number): void {
    try {
      this.runnerDistance += runDistance;
      const domTotalDist: HTMLElement = document.querySelector("#total_sum");
      
      domTotalDist.innerText = `${this.runnerDistance}`;
      if (this.runnerDistance > 199) {
        domTotalDist.style.color = "gold"; // TODO add method to change the badge
      }
      else if (this.runnerDistance > 99) {
        domTotalDist.style.color = "silver";
      }
      else {domTotalDist.style.color = "#cd7f32";}
    } catch (er) {
      console.error(er);
    }
  }
}

// let RunsPool : Array<Run> = []; // for the future - pool of all runners future runs, so matches can be made

let isModalOpen: boolean = false;

const logOut = (): void => {
  try {
    const logoutBtn: HTMLElement = document.querySelector(`.summary__item--logout`);

    logoutBtn.addEventListener(`click`, (ev) => {
      console.log('hi');
      window.location.href = "togetheRun_registration.html";
    });
  } catch (er) {
    console.error(er);
  }
};

const openModal = (): void => {
  try {
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);
    const addRunBtn: HTMLElement = document.querySelector(`.dashboard__item--add`);

    addRunBtn.addEventListener(`click`, (ev) => {
      isModalOpen = true;
      modal.style.display = `flex`;
      modalBox.style.display = `unset`;
      onlyFutureRuns();
    });
  } catch (er) {
    console.error(er);
  }
};

const closeModal = (): void => {
  try {
    const close: HTMLElement = document.querySelector(`.close`);
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);

    close.addEventListener(`click`, (ev) => {
      isModalOpen = false;
      modal.style.display = `none`;
      modalBox.style.display = `none`;
    });
  } catch (er) {
    console.error(er);
  }
};

const onlyFutureRuns = (): void => {
  try {
    const runTimeInput: HTMLElement = document.querySelector(`#run_time_form`);
    const now = new Date();
      runTimeInput.setAttribute("min",now.toISOString().substring(0,16));
  } catch (er) {
    console.error(er);
  }
};

const runner = new LoggedInRunner();

const runSubmit = (ev: any) => {
  try {
    ev.preventDefault();

    const runDistance: number = Number(ev.target.elements.runDistance.value);
    const runTime: Date = new Date(ev.target.elements.runTime.value);
    const runArea: string = ev.target.elements.runArea.value;

    const run = new Run(runDistance, runTime, runArea);

    runner.addRun(run);

    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);

    isModalOpen = false;
    modal.style.display = `none`;
    modalBox.style.display = `none`;

    ev.target.reset();
  } catch (er) {
    console.error(er);
  }
};

runner.personalDetailsToDOM();
logOut();
openModal();
closeModal();
