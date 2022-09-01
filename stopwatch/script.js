
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const milisec = document.querySelector("#milisec");
const btnStart = document.querySelector("#start");
const btnReset = document.querySelector("#reset");

let countMinute = 00, countSecond = 00, countMili = 00;
let isRunning = false;


//stop watch internal functions
function startTimer() {
    if (countMili < 10)
        milisec.innerText = '0' + countMili;
    else milisec.innerText = countMili;

    if (countSecond < 10) {
        second.innerText = '0' + countSecond;
    }
    else second.innerText = countSecond;

    if (countMinute < 10)
        minute.innerText = '0' + countMinute;
    else minute.innerText = countMinute;

    countMili += 1;

    if (countMili == 100) {
        countSecond += 1;
        countMili = 0;
    }
    if (countSecond == 60) {
        countSecond = 0;
        countMinute += 1;
    }
}

function startClock() {
    isRunning = true;
    document.querySelector("i.fas").classList.remove("fa-play");
    document.querySelector("i.fas").classList.add("fa-pause");
    timerRunning = setInterval(startTimer, 10);

}

function stopClock() {
    isRunning = false;
    document.querySelector("i.fas").classList.remove("fa-pause");
    document.querySelector("i.fas").classList.add("fa-play");
    clearInterval(timerRunning);
}

function resetTimer() {
    isRunning = false;
    stopClock();
    countMinute = 00, countSecond = 00, countMili = 00;
    minute.innerText = '0' + countMinute;
    second.innerText = '0' + countSecond;
    milisec.innerText = '0' + countMili;
}

// event listeners
btnStart.addEventListener('click', () => {
    if (isRunning == false) {
        startClock();
    }
    else {
        stopClock();
    }
})

btnReset.addEventListener('click', resetTimer);