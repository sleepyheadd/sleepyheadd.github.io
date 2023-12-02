setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock() {
    const currentDate = new Date();
    const curSeconds = currentDate.getSeconds();
    const curMinutes = curSeconds / 60 + currentDate.getMinutes();
    const curHours = curMinutes / 60 + (currentDate.getHours() % 12);

    const secondsRatio = 2.5 * Math.pow(curSeconds / 5, 2);
    const minutesRatio = 2.5 * Math.pow(curMinutes / 5, 2);
    const hoursRatio = 2.5 * Math.pow(curHours, 2);

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio);
}

setClock();