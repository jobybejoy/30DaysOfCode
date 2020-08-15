const calender__body = document.querySelector(".calender__days");

function generateDays(
  currentDate,
  selectMonth,
  selectYear,
  numberOfDaysInMonth,
  firstWeekDayofMonth
) {
  for (let i = 1; i < firstWeekDayofMonth; i++) {
    let div = document.createElement("div");
    div.classList.add("spacer");
    div.textContent = "";
    calender__body.appendChild(div);
  }
  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    let btn = document.createElement("button");
    btn.classList.add("date");
    if (
      i == currentDate.getDate() &&
      selectMonth == currentDate.getMonth() &&
      selectYear == currentDate.getFullYear()
    ) {
      btn.classList.add("selected");
    }
    btn.textContent = i;
    calender__body.appendChild(btn);
  }
}

function numberOfDaysinMonth(month, year) {
  console.log("Searching for ", allMonths[month]);
  return new Date(year, month + 1, 0).getDate();
}

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

displayCalender(currentMonth, currentYear, today);

function nextMonth() {}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", navToPreviousMonth);
nextBtn.addEventListener("click", navToNextMonth);

function navToPreviousMonth() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  displayCalender(currentMonth, currentYear, today);
}

function navToNextMonth() {
  currentYear = currentMonth == 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  displayCalender(currentMonth, currentYear, today);
}

function displayCalender(month, year, today) {
  const monthAndYear = document.querySelector(".calender__monthAndYear");
  monthAndYear.innerHTML = "";
  calender__body.innerHTML = "";

  const firstWeekDayofMonth = new Date(year, month).getDay();

  monthAndYear.insertAdjacentHTML(
    "beforeend",
    `<span class="bold">${allMonths[month]}</span> ${year}`
  );

  const numberOfDays = numberOfDaysinMonth(month, year);

  generateDays(today, month, year, numberOfDays, firstWeekDayofMonth);
}
