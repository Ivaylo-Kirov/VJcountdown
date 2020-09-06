
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

function countdown() {

    const newYearsEve = new Date("01/01/2021");
    const currDate = new Date();

    const seconds = Math.floor((newYearsEve - currDate) / 1000) % 60;
    const minutes = Math.floor((newYearsEve - currDate) / 1000 / 60) % 60;
    const hours = Math.floor((newYearsEve - currDate) / 1000 / 3600) % 24;
    const days = Math.floor((newYearsEve - currDate) / 1000 / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}

setInterval(countdown, 1000);