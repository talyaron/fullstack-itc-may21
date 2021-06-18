class Run {
  runDistance: number;
  runDate: Date;
  runBiz: string;
  runId: string = "id" + Math.random().toString(16).slice(2);

  constructor(runDistance: number, runDate: Date) {
    this.runDistance = runDistance;
    this.runDate = runDate;
  }
}

document.querySelector("#total_distance").innerHTML = "0 Km";

class Runner {
  runnerName: string;
  profImageUrl: string;
  allRuns: Array<Run> = [];
  totalDistance: number = Number(
    document.querySelector("#total_distance").innerHTML.replace(" Km", "")
  );

  // constructor (profImageUrl : string) {
  //     this.profImageUrl = profImageUrl;
  // }

  addRun(run: Run): void {
    this.allRuns.push(run);
    this.addRunToDOM(run);
    this.refreshTotal(run.runDistance);
  }

  addRunToDOM(run: Run) {
    try {
      const runsContainer: HTMLElement =
        document.querySelector(".runs");
      const signFAClass = run.runDistance >= 0 ? "plus" : "minus";
      const signTitle = run.runDistance >= 0 ? "Income" : "Expense";
      const runColor = run.runDistance >= 0 ? "green" : "red";
      const runFormatedDate = `${run.runDate.getDate()}-${
        run.runDate.getMonth() + 1
      }-${run.runDate.getFullYear()} ${run.runDate.getHours()}:${run.runDate.getMinutes()}`;
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
    this.totalDistance += runDistance;
    this.updateDOMTotal(this.totalDistance);
  }

  updateDOMTotal(totalDistance: number) {
    try {
      const domTotalDist : HTMLElement = document.querySelector("#total_distance");
      domTotalDist.innerText = `${totalDistance} Km`;
      if (totalDistance >= 0) {
        domTotalDist.style.color = "green";
      } else {
        domTotalDist.style.color = "red";
      }
    } catch (er) {
      console.error(er);
    }
  }
}

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

const handleSubmit = (ev: any) => {
  try {
    ev.preventDefault();

    const runDistance: number = Number(ev.target.elements.runDistance.value);
    const runDate: Date = ev.target.elements.runDate.value;

    const run = new Run(runDistance, runDate);

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
