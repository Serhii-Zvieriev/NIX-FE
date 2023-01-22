// ========== TASK 1 ==========
const divTask1 = document.querySelector(".divTask1");
const daysOfTheWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

function createCalendar(elem, year, month) {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  table.style.border = "1px solid purple";
  table.style.borderSpacing = 0;

  //создание шапки таблицы
  let tr = thead.appendChild(document.createElement("tr"));
  for (let i = 0; i < 7; i += 1) {
    let th = tr.appendChild(document.createElement("th"));
    th.textContent = daysOfTheWeek[i];
    tr.appendChild(th);
    th.style.border = "1px solid purple";
  }

  let count = 0;
  //   let randomDay = getRandomInt(1, 7); это оказалось не нужно, так как я изначально не так понял задачу

  let mon = month - 1;
  let d = new Date(year, mon);

  console.log(getDay(d));
  console.log(d.getMonth());

  Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  };

  console.log(d.daysInMonth());

  const numberOfLines = getDay(d) > 4 ? 6 : 5; //добавляет или убирает 6 строку в таблице

  for (let j = 0; j < numberOfLines; j++) {
    let tr = tbody.appendChild(document.createElement("tr"));
    for (let i = 0; i < 7; i++) {
      count += 1;
      let td = document.createElement("td");
      tr.appendChild(td);
      if (count - getDay(d) > 0 && count - getDay(d) < d.daysInMonth() + 1) {
        td.textContent = count - getDay(d);
      }
      td.style.border = "1px solid purple";
    }
  }

  elem.append(table);
}

// createCalendar(divTask1, 2023, 2);
// createCalendar(divTask1, 2023, 1);
// ========== END TASK 1 ============================================================

// ========== TASK 3 ==========

// ========== END TASK 3 ============================================================

// ========== TASK 4 ==========

// ========== END TASK 4 ============================================================

// ========== TASK 5 ==========

// ========== END TASK 5 ============================================================

// ========== TASK 6 ==========

// ========== END TASK 6 ============================================================

// ========== TASK 7 ==========

// ========== END TASK 7 ============================================================

// ========== TASK 8 ==========

// ========== END TASK 8 ============================================================

// ========== TASK 9 ==========

// ========== END TASK 9 ============================================================
