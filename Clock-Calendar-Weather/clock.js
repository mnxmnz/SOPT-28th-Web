const h = document.querySelector('.js-hour');
const m = document.querySelector('.js-minute');
const s = document.querySelector('.js-second');

function setClock() {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondDegrees = seconds * 6;

  s.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = currentTime.getMinutes();
  const minuteDegrees = minutes * 6;
  m.style.transform = `rotate(${minuteDegrees}deg)`;

  let hours = currentTime.getHours();

  if (hours < 12) {
    return;
  } else {
    hours = hours - 12;
  }

  const hourDegrees = hours * 30 + (30 / 60) * minutes;
  h.style.transform = `rotate(${hourDegrees}deg)`;
}

function init() {
  setInterval(setClock, 1000);
  setClock();
}

init();
