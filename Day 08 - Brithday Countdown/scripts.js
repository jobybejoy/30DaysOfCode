const container = document.querySelector(".timer__container");

const year = new Date().getFullYear();

const targetDate = new Date(year, 8 - 1, 11).getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();

  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const html = getTimerHTML(days, hours, minutes, seconds);
  container.innerHTML = html;
}, 1000);

function getTimerHTML(days, hours, minutes, seconds) {
  const daysHTML = `<div class="timer__element">
          <div class="timer__count">${days}</div>
          <div class="timer__label">Days</div>
        </div>`;

  const hoursHTML = `<div class="timer__element">
          <div class="timer__count">${hours < 10 ? `0${hours}` : hours}</div>
          <div class="timer__label">Hours</div>
        </div>`;

  const minutesHTML = `<div class="timer__element">
          <div class="timer__count">${
            minutes < 10 ? `0${minutes}` : minutes
          }</div>
          <div class="timer__label">Minutes</div>
        </div>`;

  const secondsHTML = `<div class="timer__element">
          <div class="timer__count">${
            seconds < 10 ? `0${seconds}` : seconds
          }</div>
          <div class="timer__label">Seconds</div>
        </div>`;

  let html;

  if (days == 0) {
    if (hours == 0) {
      if (minutes == 0) {
        if (seconds == 0) {
          return "Present";
        }
        return secondsHTML;
      }
      return minutesHTML + secondsHTML;
    }
    return hoursHTML + minutesHTML + secondsHTML;
  }

  return daysHTML + hoursHTML + minutesHTML + secondsHTML;
}
