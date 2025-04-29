const stopwatchBox = document.querySelector("#stopwatch-box");

const stopwatchDisplay = stopwatchBox.querySelector("#stopwatch-display");
const stopwatchMinDisplay = stopwatchDisplay.querySelector("#stopwatch-min");
const stopwatchSecDisplay = stopwatchDisplay.querySelector("#stopwatch-sec");
const stopwatchMSecDisplay = stopwatchDisplay.querySelector("#stopwatch-msec");

const stopwatchBtnBox = stopwatchBox.querySelector("#stopwatch-btn-box");
const btnPlayStopwatch = stopwatchBtnBox.querySelector("#stopwatch-btn-play");
const btnPauseStopwatch = stopwatchBtnBox.querySelector("#stopwatch-btn-pause");
const btnResetStopwatch = stopwatchBtnBox.querySelector("#stopwatch-btn-reset");

btnPlayStopwatch.addEventListener("click", playStopwatch);
btnPauseStopwatch.addEventListener("click", pauseStopwatch);
btnResetStopwatch.addEventListener("click", resetStopwatch);

btnPauseStopwatch.classList.add("hidden");
btnResetStopwatch.classList.add("disabled");

let stopwatchIntervalId = null;

function playStopwatch() {
  if (stopwatchIntervalId === null) {
    stopwatchIntervalId = setInterval(plusCounter, 10);
    btnPlayStopwatch.classList.add("hidden");
    btnPauseStopwatch.classList.remove("hidden");
    btnResetStopwatch.classList.remove("disabled");
  }
}
function pauseStopwatch() {
  if (stopwatchIntervalId !== null) {
    clearInterval(stopwatchIntervalId);
    stopwatchIntervalId = null;
    btnPlayStopwatch.classList.remove("hidden");
    btnPauseStopwatch.classList.add("hidden");
  }
}
function resetStopwatch() {
  pauseStopwatch();
  btnResetStopwatch.classList.add("disabled");
  stopwatchMinDisplay.textContent = "00";
  stopwatchSecDisplay.textContent = "00";
  stopwatchMSecDisplay.textContent = "00";
}

function plusCounter() {
  let msec = Number.parseInt(stopwatchMSecDisplay.textContent) + 1;
  let min = Number.parseInt(stopwatchMinDisplay.textContent);
  let sec = Number.parseInt(stopwatchSecDisplay.textContent);
  if (msec >= 100) {
    msec = 0;
    sec += 1;
  }
  if (sec >= 60) {
    sec = 0;
    min += 1;
  }
  stopwatchMSecDisplay.textContent = msec.toString().padStart(2, "0");
  stopwatchSecDisplay.textContent = sec.toString().padStart(2, "0");
  stopwatchMinDisplay.textContent = min.toString().padStart(2, "0");
}
