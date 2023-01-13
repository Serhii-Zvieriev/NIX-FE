// ========== TASK 1 ==========
const car = {
  // bmw: "m3",
  // honda: "civic",
};

const isEmpty = (obj) => (Object.keys(obj).length ? false : true);
// console.log(isEmpty(car));
// ========== END TASK 1 ============================================================

// ========== TASK 2 ==========
const num = {
  one: 1,
  two: 2,
  three: "three",
};

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// multiplyNumeric(num);
// console.log(num);
// ========== END TASK 2 ============================================================

// ========== TASK 3 ==========
function readNumber() {
  const num = Number(prompt("Insert the number")) / 2;
  console.log(num);
  if (isNaN(num)) {
    alert("You didn't enter a number");
    readNumber();
  } else {
    return;
  }
}

// readNumber();
// ========== END TASK 3 ============================================================

// ========== TASK 4 ==========
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// alert(random(1, 2));
// ========== END TASK 4 ============================================================

// ========== TASK 5 ==========
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// alert(randomInteger(9, 10));
// ========== END TASK 5 ============================================================

// ========== TASK 6 ==========
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst("вася"));
// ========== END TASK 6 ============================================================

// ========== TASK 7 ==========
const str = "free xxxxx";

function checkSpam(str) {
  if (str.includes("xxx") || str.includes("viagra")) {
    return true;
  } else {
    return false;
  }
  // str.includes("xxx") || str.includes("viagra") ? true : false; - где ошибка?
}

// console.log(checkSpam(str));
// ========== END TASK 7 ============================================================

// ========== TASK 8 ==========
// ========== END TASK 8 ==========

// ========== TASK 9 ==========
// ========== END TASK 9 ==========

// ========== TASK 10 ==========
// ========== END TASK 10 ==========

// ========== TASK 11 ==========
// ========== END TASK 11 ==========

// ========== TASK 12 ==========
// ========== END TASK 12 ==========

// ========== TASK 13 ==========
// ========== END TASK 13 ==========

// ========== TASK 14 ==========
// ========== END TASK 14 ==========

// ========== TASK 15 ==========
// ========== END TASK 15 ==========

// ========== TASK 16 ==========
// ========== END TASK 16 ==========

// ========== TASK 17 ==========
// ========== END TASK 17 ==========
