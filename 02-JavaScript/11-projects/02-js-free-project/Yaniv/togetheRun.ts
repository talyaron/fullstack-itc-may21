class Run {
  runDistance: number;
  runDate: Date = new Date();
  runBiz: string;
  runId: string = "id" + Math.random().toString(16).slice(2);

  constructor(runDistance: number, runBiz: string) {
    this.runBiz = runBiz;
    this.runDistance = runDistance;
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
      const transContainer: HTMLElement =
        document.querySelector(".runs");
      const signFAClass = run.runDistance >= 0 ? "plus" : "minus";
      const signTitle = run.runDistance >= 0 ? "Income" : "Expense";
      const runColor = run.runDistance >= 0 ? "green" : "red";
      const runFormatedDate = `${run.runDate.getDate()}-${
        run.runDate.getMonth() + 1
      }-${run.runDate.getFullYear()} ${run.runDate.getHours()}:${run.runDate.getMinutes()}`;
      const totalBeforeContainer: HTMLElement = document.querySelector("#total_distance");

      const transHTML = `<div class="runs__item runs__item--action">
      <i id="sign" class="fas fa-2x fa-${signFAClass}-circle" title="${signTitle}" style="color: ${runColor};"></i>
      <div id="trans_amount" style="color: ${runColor};">
        ${Math.abs(run.runDistance)} Km
      </div>
      <div id="temp_total">Balace: ${Number(totalBeforeContainer.innerHTML.replace(' Km','')) + run.runDistance} Km</div>
      <div id="trans_date">${runFormatedDate}</div>
      <div id="trans_business">${run.runBiz}</div>
      <div id="trans_id">${run.runId}</div>
    </div>`;

      transContainer.insertAdjacentHTML('beforeend',transHTML);

      const totalRunsContainer: HTMLElement = document.querySelector("#total_togetheruns");
      totalRunsContainer.innerText = `TogetheRuns So Far: ${runFormatedDate}`;
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
const addTransBtn: HTMLElement = document.querySelector(
  `.runs__item--add`
);

const openModal = (): void => {
  try {

    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);
    addTransBtn.addEventListener(`click`, (ev) => {
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
    const runBiz: string = ev.target.elements.runBiz.value;

    const run = new Run(runDistance, runBiz);

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
