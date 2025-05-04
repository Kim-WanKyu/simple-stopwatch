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

const stopwatchInfo = { intervalId: null, startTime: 0, gap: 0 };

function playStopwatch() {
  if (stopwatchInfo.intervalId === null) {
    stopwatchInfo.startTime = Date.now();
    stopwatchInfo.intervalId = setInterval(calcStopwatch, 10);
    btnPlayStopwatch.classList.add("hidden");
    btnPauseStopwatch.classList.remove("hidden");
    btnResetStopwatch.classList.remove("disabled");
  }
}
function pauseStopwatch() {
  if (stopwatchInfo.intervalId !== null) {
    clearInterval(stopwatchInfo.intervalId);
    stopwatchInfo.gap += Date.now() - stopwatchInfo.startTime;
    stopwatchInfo.intervalId = null;
    btnPlayStopwatch.classList.remove("hidden");
    btnPauseStopwatch.classList.add("hidden");
  }
}
function resetStopwatch() {
  pauseStopwatch();
  stopwatchInfo.startTime = 0;
  stopwatchInfo.gap = 0;
  btnResetStopwatch.classList.add("disabled");
  stopwatchMinDisplay.textContent = "00";
  stopwatchSecDisplay.textContent = "00";
  stopwatchMSecDisplay.textContent = "00";
}

function calcStopwatch() {
  const elapsedTime = Date.now() - stopwatchInfo.startTime + stopwatchInfo.gap;

  const msec = parseInt((elapsedTime % 1000) / 10);
  const sec = parseInt((elapsedTime / 1000) % 60);
  const min = parseInt((elapsedTime / (1000 * 60)) % 60);

  stopwatchMSecDisplay.textContent = msec.toString().padStart(2, "0");
  stopwatchSecDisplay.textContent = sec.toString().padStart(2, "0");
  stopwatchMinDisplay.textContent = min.toString().padStart(2, "0");
}
