const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const Timer = document.querySelector(".timer");

let timerid = null;
let seconds = 0;
let Minutes = 0;
let Hours = 0;

startBtn.addEventListener("click", function () {
  if (timerid !== null) {
    clearInterval(timerid);
  }
  timerid = setInterval(startTimer, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerid);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerid);
  Timer.innerHTML = `00 : 00 : 00`;
  seconds = 0;
  Minutes = 0;
  Hours = 0;
});

function startTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    Minutes++;
    if (Minutes == 60) {
      Minutes = 0;
      Hours++;
    }
  }

  let secondsStr = String(seconds).padStart(2, "0");
  let minutesStr = String(Minutes).padStart(2, "0");
  let hoursStr = String(Hours).padStart(2, "0");

  Timer.innerHTML = `${hoursStr} : ${minutesStr} : ${secondsStr}`;
}
