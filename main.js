const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let ms = 0;
let s = 0;
let m = 0;
let h = 0;

let newMs;
let newS;
let newM;
let newH;

let timeStatus = "stop";
let Interval;

startButton.disabled = false;
stopButton.disabled = true;
resetButton.disabled = true;

const stopWatch = () => {
    ms++;
    if (ms >= 100) {
        s++;
        ms = 0;
        if (s / 60 === 1) {
            m++;
            s = 0;
        }
        if (m / 60 === 1) {
            h++;
            m = 0;
        }
    }
    if (ms < 10) {
        newMs = "0" + ms;
    } else {
        newMs = ms;
    }
    if (s < 10) {
        newS = "0" + s;
    } else {
        newS = s;
    }
    if (m < 10) {
        newM = "0" + m;
    } else {
        newM = m;
    }
    if (h < 10) {
        newH = "0" + h;
    } else {
        newH = h;
    }
    timer.innerHTML = newH + ":" + newM + ":" + newS + ":" + newMs;
};

startButton.addEventListener("click", () => {
    if (timeStatus === "stop") {
        Interval = setInterval(stopWatch, 10);
        timeStatus = "start";
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    };
});

stopButton.addEventListener("click", () => {
    clearInterval(Interval);
    timeStatus = "stop";
    stopButton.disabled = true;
    startButton.disabled = false;

});

resetButton.addEventListener("click", () => {
    clearInterval(Interval);
    timer.innerHTML = "00:00:00:00";
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    timeStatus = "stop";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});




