// ========== TASK 1 ==========
function camelize(str) {
  const arrStr = str.split("-");
  arrStr.forEach((el, idx) => {
    idx === 0 ? el : arrStr.splice(idx, 1, el[0].toUpperCase() + el.slice(1));
  });
  return arrStr.join("");
}
//console.log(camelize("background-color"));
//console.log(camelize("-webkit-transition"));
// ========== END TASK 1 ============================================================

// ========== TASK 2 ==========
function filterRange(arr, a, b) {
  let newArr = [];
  arr.map((el) => {
    if (el >= a && el <= b) {
      //больше или равно потому что в ответе есть 1, а значит нужен >=
      newArr.push(el);
    }
  });
  return newArr;
}
// const arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4));
// ========== END TASK 2 ============================================================

// ========== TASK 3 ==========
function filterRangeInPlace(arr, a, b) {
  arr.forEach((el, idx) => {
    if (el <= a || el >= b) {
      arr.splice(idx, 1);
    }
  });
  console.log(arr);
}
// const arr = [5, 3, 8, 1, -1, 2];
// filterRangeInPlace(arr, 1, 4);
// ========== END TASK 3 ============================================================

// ========== TASK 4 ==========
// const arr = [5, 2, 1, -10, 8];
// console.log(arr.sort((a, b) => b - a));
// ========== END TASK 4 ============================================================

// ========== TASK 5 ==========
function copySorted(arr) {
  const newArr = arr.slice(0);
  return newArr.sort();
}
// const arr = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arr));
// console.log(arr);
// ========== END TASK 5 ============================================================

// ========== TASK 6 ==========
//не понимаю зачем создать функцию Calculator и в ней делать несколько функий, для такого случая уже лучше
//создать класс и прописать ему методы чтобы потом вызывать Calculator.sum()
function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percent(a, pers) {
  return (a / 100) * pers;
}
// console.log(percent(100, 10));
// ========== END TASK 6 ============================================================

// ========== TASK 7 ==========
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map((el) => el.name);
// console.log(names);
// ========== END TASK 7 ============================================================

// ========== TASK 8 ==========
function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
// let vasya = { name: " Вася ", age: 25 };
// let petya = { name: " Петя ", age: 30 };
// let masha = { name: " Маша ", age: 28 };
// let arr = [vasya, petya, masha];

// console.log(sortByAge(arr));
// ========== END TASK 8 ============================================================

// ========== TASK 9 ==========
function getAverageAge(users) {
  const sumAge = users.reduce((acc, element) => {
    return acc + element.age;
  }, 0);

  return sumAge / users.length;
}
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr));
// ========== END TASK 9 ============================================================

// ========== TASK 10 ==========
function unique(arr) {
  const newArr = [];
  for (let el of arr) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  return newArr;
}

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];
// console.log(unique(strings));
// ========== END TASK 10 ============================================================

// ========== TASK 11 ==========
function unique1(arr) {
  const newArr = new Set();
  for (let el of arr) {
    newArr.add(el);
  }

  return newArr;
}

/* Я нащёл еще решения данной задачи, на сам пока что не додумался бы до такого
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];

// Первый метод
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // вернет ['banana', 'apple', 'orange', 'watermelon', 'grape']

// Второй метод
const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // вернет ['banana', 'apple', 'orange', 'watermelon', 'grape']
*/

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique1(values));
// ========== END TASK 11 ============================================================

// ========== TASK 12 ==========

// ========== END TASK 12 ============================================================

// ========== TASK 13 ==========

// ========== END TASK 13 ============================================================

// ========== TASK 14 ==========

// ========== END TASK 14 ============================================================

// ========== TASK 15 ==========

// ========== END TASK 15 ============================================================

// ========== TASK 16 ==========

// ========== END TASK 16 ============================================================

// ========== TASK 17 ==========

// ========== END TASK 17 ============================================================
