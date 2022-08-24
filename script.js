let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDisplay = document.querySelector(".displayTimer");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");
let int;

startButton.addEventListener("click", () => {
  int = setInterval(displayTimer, 10);
  startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  clearInterval(int);
  startButton.disabled = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(int);
  [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerDisplay.innerHTML = "00 : 00 : 00 : 000";
  startButton.disabled = false;
});

function displayTimer() {
  miliseconds += 10;
  if (miliseconds == 1000) {
    miliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    miliseconds < 10
      ? "00" + miliseconds
      : miliseconds < 100
      ? "0" + miliseconds
      : miliseconds;

  timerDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
