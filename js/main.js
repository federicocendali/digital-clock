let dayDisplay = document.getElementById('day');
let dayNumber = document.getElementById('day-number');
let month = document.getElementById('month');
let year = document.getElementById('year');
let amPm = document.getElementById('am-pm');
let clock = document.getElementById('clock');

function updateClock() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  let dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  let cDay = date.getDate().toString();
  let cMonth = (date.getMonth() + 1).toString();
  let cYear = date.getFullYear().toString();

  dayDisplay.innerHTML = dayName;
  dayNumber.innerHTML = cDay;
  month.innerHTML = cMonth;
  year.innerHTML = cYear;
  amPm.innerHTML = hours < 12 ? 'AM' : 'PM';
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
