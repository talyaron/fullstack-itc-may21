class Run {
  runDistance: number;
  runTime: any; // including hour - Date type caused issues with parsing from local storage
  runPace: string;
  runArea: string;
  runLocation: string;
  runMatch: boolean;
  runId: string = "run" + Math.random().toString(16).slice(2);
  runRunnerId: string = JSON.parse(localStorage.getItem("currentRunner")).runnerId;

  constructor(
    runDistance: number,
    runTime: any,
    runPace: string,
    runArea: string,
    runLocation: string,
    runMatch: boolean
  ) {
    this.runDistance = runDistance;
    this.runTime = runTime;
    this.runPace = runPace;
    this.runArea = runArea;
    this.runLocation = runLocation;
    this.runMatch = runMatch;
  }
}

class RunsPool {
  allRuns: Array<Run>;

  constructor(allRuns: Array<Run>) {
    this.allRuns = allRuns;
  }

  updateToPool(run: Run): boolean {
    try {
      const runToUpdateIndex: number = this.allRuns.findIndex(runItem => runItem.runId === run.runId);

      if (runToUpdateIndex === -1) {
        this.allRuns.push(run);
      } else {
        this.allRuns[runToUpdateIndex] = run;
      }
      this.allRuns = this.allRuns.sort((a: any, b: any) => Date.parse(a.runTime) - Date.parse(b.runTime));
      this.allRuns = this.allRuns.sort((a: any, b: any) => a.runRunnerId - b.runRunnerId);
      run.runMatch = this.findMatch(run);
      return run.runMatch;
    } catch (er) {
      console.error(er);
    }
  }

  deleteFromPool(runToDeleteId: string) {
    const runToDeleteIndex: number = this.allRuns.findIndex(runItem => runItem.runId === runToDeleteId);
    this.allRuns = this.allRuns.splice(runToDeleteIndex,1);
  }

  findMatch(run: Run): boolean {
    try {
      const runMatches: Array<Run> = this.allRuns.filter(
        (runItem) =>
          runItem.runRunnerId !== run.runRunnerId &&
          Math.abs((runItem.runDistance - run.runDistance)) < 2 && // less than 2 Km dif
          Math.abs((Date.parse(runItem.runTime) - Date.parse(run.runTime)) / (1000 * 60 * 60)) < 2 && // less than 2 hours dif
          runItem.runPace === run.runPace &&
          runItem.runArea === run.runArea
      );
      if (runMatches.length > 0) {
        run.runMatch = true;
        const currentRunIndex: number = this.allRuns.findIndex((runItem) => runItem.runId === run.runId);
        this.allRuns[currentRunIndex].runMatch = true;
        this.showMatchesOnDON(runMatches);
      }
      return run.runMatch;
    } catch (er) {
      console.error(er);
    }
  }

  showMatchesOnDON(runMatches: Array<Run>) {
    // in the future - the method will add a button to show matches to the run box, in case available.
    // clicking will open a modal of the matches
  }
}

interface Preferences {
  // For the future
  prefChat: string; // chatty, here and there, only when necessary, All (default)
  prefCompetative: string; // very, a little, not at all, All (default)
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
  runnerDistance: number = JSON.parse(localStorage.getItem("currentRunner")).runnerDistance;

  personalDetailsToDOM(): void {
    const mainTitle: HTMLElement = document.querySelector("title");
    const runnerNameContainter: HTMLElement = document.querySelector(
      ".summary__item--runner_name"
    );
    const runnerProfileImg: HTMLElement = document.querySelector(
      ".profile_image__item--profile_image"
    );
    const ruunerTotalDistance: HTMLElement =
      document.querySelector("#total_sum");
    const runnerRunsCounter: HTMLElement =
      document.querySelector("#total_counts");

    mainTitle.insertAdjacentHTML("afterbegin", `${this.runnerName}`);
    runnerNameContainter.insertAdjacentHTML("beforeend", `${this.runnerName}!`);
    runnerProfileImg.title = `${this.runnerName}`;
    if (this.runnerProfImg === null) {
      runnerProfileImg.setAttribute("src", "../images/togetheRun_logo.png");
    } else {
      runnerProfileImg.setAttribute("src", this.runnerProfImg);
    }
    ruunerTotalDistance.innerHTML = `${this.runnerDistance}`;
    runnerRunsCounter.innerHTML = `${this.runnerRuns.length}`;
    this.renderRunsToDOM();
    // window.location.href = `togetheRun_main.html?${currentRunner.runnerId}`; // causes endless loop of loading the page...can be solved by localSession.setItem("isFirstLoad",false) during first loading of the page
  }

  updateRun(run: Run): void {
    const runToEditIndex: number = this.runnerRuns.findIndex(runItem => runItem.runId === run.runId);

    if (runToEditIndex === -1) {
      this.runnerRuns.push(run);
    } else {
      this.runnerRuns[runToEditIndex] = run;
    }
    this.runnerRuns = this.runnerRuns.sort((a: any, b: any) => a.runTime - b.runTime);
    this.renderRunsToDOM();
    this.refreshDOMSummary(run.runDistance);
  }

  deleteRun(runToDeleteId: string): void {
    const runToDeleteIndex: number = this.runnerRuns.findIndex(runItem => runItem.runId === runToDeleteId);
    const runToDeleteDistance: number = - this.runnerRuns[runToDeleteIndex].runDistance;
    this.runnerRuns.splice(runToDeleteIndex,1);
    this.renderRunsToDOM();
    this.refreshDOMSummary(runToDeleteDistance);
  }

  renderRunsToDOM() {
    try {
      const runsContainer: HTMLElement = document.querySelector(".runs");

      runsContainer.innerHTML = "";
      if (this.runnerRuns.length === 0) {runsContainer.innerHTML = "<h2>You have no scheduled runs.<br/>Take this opportunity to rest<br/>😌</h2>";}
      else {
        this.runnerRuns.forEach((run) => {
          const matchFAClass = run.runMatch ? "-double" : "";
          const matchTitle = run.runMatch ? "Buddy found!" : "Pending buddy...";
          const runColor = run.runMatch ? "aqua" : "orange";
          const MatchesBtnText = run.runMatch ? "View Matches" : "No Matches Yet";
          const MatchesBtnLook = run.runMatch ? "" : ` disabled style="background-color:${runColor};cursor:not-allowed`;
          const runFormatedDate = typeof run.runTime === 'object' ? `${run.runTime.toISOString().substring(0, 16).replace("T", " ")}` : `${run.runTime.substring(0, 16).replace("T", " ")}`;
          const runHTML = `
          <div class="runs__item" id="${run.runId}">
            <i class="run_edit fas fa-edit update_run_btn"></i>
            <i class="run_delete fas fa-trash" onclick="handleDelete(event)"></i>
            <i class="match_status fas fa-2x fa-check${matchFAClass}" title="${matchTitle}" style="color: ${runColor};"></i>
            <div class="run_distance" style="color: ${runColor};">
              ${Math.abs(run.runDistance)} Km
            </div>
            <div class="run_time">${runFormatedDate}</div>
            <div class="run_pace">${run.runPace}</div>
            <div class="run_area">${run.runArea}</div>
            <button class="run_matches"${MatchesBtnLook}">${MatchesBtnText}</button>
          </div>`;

          runsContainer.innerHTML += runHTML;
        });
        openModal();
      }
    } catch (er) {
      console.error(er);
    }
  }

  refreshDOMSummary(runDistance: number): void {
    try {
      this.runnerDistance += runDistance;
      const ruunerTotalDistance: HTMLElement = document.querySelector("#total_sum");
      const runnerRunsCounter: HTMLElement = document.querySelector("#total_counts");
      const distanceBadge: HTMLElement = document.querySelector("#distance_badge");
      const togetherunBadge: HTMLElement = document.querySelector("#togetherun_badge");

      ruunerTotalDistance.innerText = `${this.runnerDistance}`;
      runnerRunsCounter.innerHTML = `${this.runnerRuns.length}`;
      if (this.runnerDistance > 199) {
        ruunerTotalDistance.style.color = "gold";
        distanceBadge.setAttribute("src", "../images/TR_Kms_G.png");
      } else if (this.runnerDistance > 99) {
        ruunerTotalDistance.style.color = "silver";
        distanceBadge.setAttribute("src", "../images/TR_Kms_S.png");
      } else {
        ruunerTotalDistance.style.color = "#cd7f32";
        distanceBadge.setAttribute("src", "../images/TR_Kms_B.png");
      }

      if (this.runnerRuns.length > 4) {
        //49 - 4 only for easy testing
        runnerRunsCounter.style.color = "gold";
        togetherunBadge.setAttribute("src", "../images/TR_G.png");
      } else if (this.runnerRuns.length > 1) {
        //19 - 1 only for easy testing
        runnerRunsCounter.style.color = "silver";
        togetherunBadge.setAttribute("src", "../images/TR_S.png");
      } else {
        runnerRunsCounter.style.color = "#cd7f32";
        togetherunBadge.setAttribute("src", "../images/TR_B.png");
      }
    } catch (er) {
      console.error(er);
    }
  }
}

let runsMainPool: RunsPool = JSON.parse(localStorage.getItem("runsPool")) ? new RunsPool(JSON.parse(localStorage.getItem("runsPool")).allRuns) : new RunsPool([]);

let currentRunner: LoggedInRunner = JSON.parse(localStorage.getItem("currentRunner")) ? JSON.parse(localStorage.getItem("currentRunner")) : null;
if (currentRunner === null) {
  window.location.href = `../togetheRun_registration/togetheRun_registration.html`;
}

let isModalOpen: boolean = false;

const logOut = (): void => {
  try {
    const logoutBtn: HTMLElement = document.querySelector(`.summary__item--logout`);

    logoutBtn.addEventListener(`click`, (ev) => {
      localStorage.clear();
      localStorage.setItem("runsPool", JSON.stringify(runsMainPool));
      window.location.href = "../togetheRun_registration/togetheRun_registration.html";
    });
  } catch (er) {
    console.error(er);
  }
};

const openModal = (): void => {
  try {
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalWrapper__item--update_run`);
    const updateRunBtns: NodeListOf<HTMLElement> = document.querySelectorAll(`.update_run_btn`);

    updateRunBtns.forEach(UpdtBtn =>
      UpdtBtn.addEventListener(`click`, (ev) => {
        isModalOpen = true;
        modal.style.display = `flex`;
        modalBox.style.display = `unset`;
        onlyFutureRuns();
        const runDiv = UpdtBtn.parentElement;
        setRunToUpdateData(runDiv);
      })
    );
  } catch (er) {
    console.error(er);
  }
};

const closeModal = (): void => {
  try {
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalWrapper__item--update_run`);
    const close: NodeListOf<HTMLElement> = document.querySelectorAll(`.close`);

    close.forEach(clsBtn =>
      clsBtn.addEventListener(`click`, (ev) => {
        isModalOpen = false;
        modal.style.display = `none`;
        modalBox.style.display = `none`;
      })
    );
  } catch (er) {
    console.error(er);
  }
};

const onlyFutureRuns = (): void => {
  try {
    const runTimeInput: HTMLElement = document.querySelector(`#run_time_form`);
    const now = new Date();
    runTimeInput.setAttribute("min", now.toISOString().substring(0, 16));
  } catch (er) {
    console.error(er);
  }
};


const setRunToUpdateData = (runDiv: HTMLElement): void => {
  try {
    const runDistanceInput: HTMLElement = document.querySelector(`#run_distance_form`);
    const runTimeInput: HTMLElement = document.querySelector(`#run_time_form`);
    const runAreaSelect: HTMLSelectElement = document.querySelector(`#run_area_form`);
    const runLocationInput: HTMLElement = document.querySelector(`#run_location_form`);
    const runPaceSelect: HTMLSelectElement = document.querySelector(`#run_pace_form`);
    const updateRunForm: HTMLElement = document.querySelector(`.update_run_form`);
    
    const runDistanceDiv: HTMLElement = runDiv.querySelector(`.run_distance`)
    const runTimeDiv: HTMLElement = runDiv.querySelector(`.run_time`)
    const runAreaDiv: HTMLElement = runDiv.querySelector(`.run_area`);
    // const runLocationDiv: HTMLElement = docrunDivument.querySelector(`.run_location`);
    const runPaceDiv: HTMLElement = runDiv.querySelector(`.run_pace`);
    
    if (runDiv.className === 'runs__item') {
      runDistanceInput.setAttribute('value',runDistanceDiv.innerText.replace(' Km',''));
      runTimeInput.setAttribute('value',runTimeDiv.innerText.replace(' ','T'));
      runAreaSelect.selectedIndex = Array.from(runAreaSelect.children).findIndex(child => child.getAttribute('value') === runAreaDiv.innerText);
      // runLocationInput.setAttribute('value',runLocationDiv.innerHTML); TODO to be added to the run box
      runPaceSelect.selectedIndex = Array.from(runPaceSelect.children).findIndex(child => child.getAttribute('value') === runPaceDiv.innerText);
      updateRunForm.setAttribute('id',`${runDiv.getAttribute('id')}`)
    } else {
      runDistanceInput.setAttribute('value','');
      runTimeInput.setAttribute('value','');
      runAreaSelect.selectedIndex = 0;
      runLocationInput.setAttribute('value','');
      runPaceSelect.selectedIndex = 0;
      updateRunForm.removeAttribute('id');
    }

  } catch (er) {
    console.error(er);
  }
};

currentRunner = new LoggedInRunner();

const updateRunSubmit = (ev: any) => {
  try {
    ev.preventDefault();

    const runToUpdateId: string = ev.target.getAttribute('id');

    const runDistance = Number(ev.target.elements.runDistance.value);
    const runTime = new Date(ev.target.elements.runTime.value);
    const runPace = ev.target.elements.runPace.value;
    const runArea = ev.target.elements.runArea.value;
    const runLocation = ev.target.elements.runLocation.value;
    const runMatch = false;

    const run = new Run(runDistance, runTime, runPace, runArea, runLocation, runMatch);
    
    if (runToUpdateId !== null) {
      run.runId = runToUpdateId;
    }

    run.runMatch = runsMainPool.updateToPool(run);
    localStorage.setItem("runsPool", JSON.stringify(runsMainPool));

    currentRunner.updateRun(run);
    localStorage.setItem("currentRunner", JSON.stringify(currentRunner));

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

const handleDelete = (ev: any): void => {
  try {
    const runToDeleteId:string = ev.target.parentElement.getAttribute('id');
    
    runsMainPool.deleteFromPool(runToDeleteId);
    localStorage.setItem("runsPool", JSON.stringify(runsMainPool));

    currentRunner.deleteRun(runToDeleteId);
    localStorage.setItem("currentRunner", JSON.stringify(currentRunner));

  } catch (er) {
    console.error(er);
  }
};

currentRunner.personalDetailsToDOM();
logOut();
openModal();
closeModal();
