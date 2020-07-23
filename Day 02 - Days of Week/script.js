const date = new Date();

// Setting current month
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonth = monthsOfYear[date.getUTCMonth()]

// Write the current Month 
const dom_month = document.querySelector(".DoW__month")
dom_month.textContent = currentMonth


const daysOfWeek = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"]
const currentDay = date.getUTCDay() - 1
const weekStartDate = date.getUTCDate() - currentDay;

const currentWeek = daysOfWeek.map(function (day, index) {
  if (currentDay == index) return { day, date: weekStartDate + index, selected: true }
  return { day, date: weekStartDate + index }
})


function generateHTML(currentWeek) {
  let html = currentWeek.map((week, index) => {
    return `<div 
          class="date__item ${week.selected ? "date--selected" : ""}">
          <div class="date__day">${week.day}</div>
          <div class="date__date">${week.date}</div>
        </div>`
  }).join("")
  return html
}


const HTML = generateHTML(currentWeek)

const containerElement = document.querySelector('.DoW__container')
containerElement.insertAdjacentHTML('afterbegin', HTML)


