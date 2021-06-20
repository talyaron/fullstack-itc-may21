class Run {
  runDistance: number;
  runTime: Date; // including hour
  runArea: string;
  runMatch: boolean = false;
  runId: string = "run" + Math.random().toString(16).slice(2);
  runRunnerId: string = JSON.parse(localStorage.getItem('currentRunner')).runnerId;; // TODO get logged in runner from localStorage

  constructor(runDistance: number, runTime: Date) {
    this.runDistance = runDistance;
    this.runTime = runTime;
  }
}

document.querySelector("#total_sum").innerHTML = "0"; // for the future - get from localStorage if registered
document.querySelector("#total_counts").innerHTML = "0"; // for the future - get from localStorage if registered

interface Preferences { // For the future
  prefChat: string; // chatty, here and there, only when necessary, All (default)
  prefGender: string; // Male, Female, All (default)
  prefAgeGroup: string; // Like me, All (default)

}

interface Shoes {
  shoesBrand: string;
  shoesModel: string;
  shoesDistance: number;

}

class Runner { // generated on the registration page - passed on to other pages via localStorage
  runnerName: string; // required on registration
  runnerId: string = JSON.parse(localStorage.getItem('currentRunner')).runnerId; // generated on registration
  runnerEmail: string = JSON.parse(localStorage.getItem('currentRunner')).runnerEmail; // required on registration
  runnerPassword: string = JSON.parse(localStorage.getItem('currentRunner')).runnerPassword; // required on registration
  runnerGender: string = JSON.parse(localStorage.getItem('currentRunner')).runnerGender; // Male, Female, Unknown (default) - TODO add method editDetails
  runnerAgeGroup: string = JSON.parse(localStorage.getItem('currentRunner')).runnerAgeGroup; // 15-19, 20's, 30's, 40's, 50's, 60's, Unknown (default) - TODO add method editDetails
  runnerChat: string = JSON.parse(localStorage.getItem('currentRunner')).runnerChat; // chatty, so so, only when necessary, Unknown (default) - TODO add method editDetails
  runnerPref: Preferences = JSON.parse(localStorage.getItem('currentRunner')).runnerPref; // default on registration - TODO add method to edit
  runnerProfImg: string = JSON.parse(localStorage.getItem('currentRunner')).runnerProfImg; // TODO add method editDetails
  runnerShoes: Shoes; // TODO add method editDetails
  runnerRuns: Array<Run> = JSON.parse(localStorage.getItem('currentRunner')).runnerRuns; // empy on registration
  runnerRunsHtml: string = document.querySelector('.runs').innerHTML; // DOM representation of all runs - new runs to DOM are added to this innerHTML
  runnerDistance: number = Number(
    document.querySelector("#total_distance").innerHTML.replace(" Km", "")
  );

  addRun(run: Run): void {
    this.runnerRuns.push(run);
    this.addRunToDOM(run);
    this.refreshTotal(run.runDistance);
  }

  addRunToDOM(run: Run) { // TODO adjust to this project
    try {
      const runsContainer: HTMLElement =
        document.querySelector(".runs");
      const signFAClass = run.runDistance >= 0 ? "plus" : "minus";
      const signTitle = run.runDistance >= 0 ? "Income" : "Expense";
      const runColor = run.runDistance >= 0 ? "green" : "red";
      const runFormatedDate = `${run.runTime.getDate()}-${
        run.runTime.getMonth() + 1
      }-${run.runTime.getFullYear()} ${run.runTime.getHours()}:${run.runTime.getMinutes()}`;
      const totalBeforeContainer: HTMLElement = document.querySelector("#total_distance");

      const runsHTML = `<div class="runs__item runs__item--action">
      <i id="sign" class="fas fa-2x fa-${signFAClass}-circle" title="${signTitle}" style="color: ${runColor};"></i>
      <div id="runs_amount" style="color: ${runColor};">
        ${Math.abs(run.runDistance)} Km
      </div>
      <div id="temp_total">Balace: ${Number(totalBeforeContainer.innerHTML.replace(' Km','')) + run.runDistance} Km</div>
      <div id="runs_date">${runFormatedDate}</div>
      <div id="runs_business">${run.runBiz}</div>
      <div id="runs_id">${run.runId}</div>
    </div>`;

      runsContainer.insertAdjacentHTML('beforeend',runsHTML);

      const totalRunsContainer: HTMLElement = document.querySelector("#total_togetheruns");
      totalRunsContainer.innerText = `${runFormatedDate} TogetheRuns`;
    } catch (er) {
      console.error(er);
    }
  }

  refreshTotal(runDistance: number): void {
    this.runnerDistance += runDistance;
    this.updateDOMTotal(this.runnerDistance);
  }

  updateDOMTotal(runnerDistance: number) {
    try {
      const domTotalDist : HTMLElement = document.querySelector("#total_distance");
      domTotalDist.innerText = `${runnerDistance} Km`;
      if (runnerDistance > 0) {
        domTotalDist.style.color = "green";
      }
    } catch (er) {
      console.error(er);
    }
  }

  logout() {
    localStorage.setItem('currentRunner',null);
    window.location.href = 'togetheRun_registration.html';
  }
}

let RunsPull : Array<Run> = []; // for the future - pull of all runners future runs, so matches can be made

let isModalOpen: boolean = false;
const addRunBtn: HTMLElement = document.querySelector(
  `.dashboard__item--add`
);

const openModal = (): void => {
  try {
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);
    addRunBtn.addEventListener(`click`, (ev) => {
      isModalOpen = true;
      modal.style.display = `flex`;
      modalBox.style.display = `unset`;
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

const runs = new Runner();

const runSubmit = (ev: any) => {
  try {
    ev.preventDefault();

    const runDistance: number = Number(ev.target.elements.runDistance.value);
    const runTime: Date = ev.target.elements.runTime.value;

    const run = new Run(runDistance, runTime);

    runs.addRun(run);

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

openModal();
closeModal();
