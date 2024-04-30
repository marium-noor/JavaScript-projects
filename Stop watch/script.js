let time = document.querySelector('p');

let [seconds, minutes, hours] = [0, 0, 0];

let timer = null;

function stopWatch() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    time.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if(timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000)
}
function watchPause() {
    clearInterval(timer);
}
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}

