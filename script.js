const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const timer = document.getElementById('timer');
const icon = document.getElementById('play-pause-icon');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let isRunning = false;

function updateTimerDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${h}:${m}:${s}`;
}

function startTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    updateTimerDisplay();
}

startStopBtn.addEventListener("click", () => {
    if (!isRunning) {
        interval = setInterval(startTimer, 1000);
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        icon.id = "pause";
        isRunning = true;
    } else {
        clearInterval(interval);
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        icon.id = "play";
        isRunning = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    icon.id = "play";
    isRunning = false;
});
