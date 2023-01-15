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
function truncate(str, maxlength) {
  // if (str.length >= maxlength) {
  //   return (newStr = str.slice(0, maxlength - 3) + "..."); // я считал что "..." это 3 символа, по этому -3
  // } else {
  //   return str;
  // }
  return str.length >= maxlength ? str.slice(0, maxlength - 3) + "..." : str;
}

// console.log(truncate("Ось що мені хотілося б сказати на цю тему:", 20));
// console.log(truncate("Усім привіт!", 20));
// ========== END TASK 8 ============================================================

// ========== TASK 9 ==========
function extractCurrencyValue(str) {
  const arr = str.split("");
  const newArr = [];
  arr.forEach((el) => {
    if (!isNaN(el)) {
      newArr.push(el);
    }
  });
  return newArr.join("");
}

// console.log(extractCurrencyValue("@12$3"));
// ========== END TASK 9 ============================================================

// ========== TASK 10 ==========
function sumInput() {
  const arr = [];
  let sum = 0;

  let val;
  do {
    val = prompt("Введите число");
    arr.push(val);
  } while (Boolean(val) && !isNaN(val));

  for (let i = 0; i < arr.length - 1; i += 1) {
    sum += Number(arr[i]);
  }

  return sum;
}

// console.log(sumInput());
// ========== END TASK 10 ============================================================

// ========== TASK 11 ==========
function checkAge(age) {
  if (age > 18) {
    //Условие возраст больше 18? если да то выполниться код тот что
    //в фигурных скобках, если нет то зайдет в else и сделает что написано там
    //когда срабатывает return то происходит выход из функции, по этому выполниться чтото одно
    return true;
  } else {
    // ...
    return confirm(" Батьки дозволили ?");
  }
}

function checkAge(age) {
  if (age > 18) {
    //Условие возраст больше 18? если да то выполниться код тот что
    //в фигурных скобках, если нет то выполнит код что написан ниже
    //что по итогу одно и тоже
    //если внутри фигурных скобок убрать return то тогда бы работало по разному, а так когда
    //выполнение кода доходит до return промходит выход из функции
    return true;
  }
  // ...
  return confirm(" Батьки дозволили ?");
}

//Ответ: работает одинаково
// ========== END TASK 11 ============================================================

// ========== TASK 12 ==========
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm(" Батьки дозволили ?");
  }

  // age > 18 ? true : confirm(" Батьки дозволили ?");
  // return age > 18 || confirm(" Батьки дозволили ?");
}

// console.log(checkAge(9));
// ========== END TASK 12 ============================================================

// ========== TASK 13 ==========
function min(a, b) {
  return a > b ? b : a;
}

// console.log(min(3, 2));
// ========== END TASK 13 ============================================================

// ========== TASK 14 ==========
function pow(x, n) {
  let pow = 1;
  for (i = 1; i <= n; i += 1) {
    pow *= x;
  }
  return pow;
}
// console.log(pow(3, 0));
// ========== END TASK 14 ============================================================

// ========== TASK 15 ==========
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодилися.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// ask(
//   //я не понял задание, выполнил как поняд
//   "Ви згодні?",
//   () => alert("Ви погодилися."),
//   () => alert("Ви скасували виконання.")
// );

// ========== END TASK 15 ============================================================

// ========== TASK 16 ==========
//В задании неченго не сказано про код, что есть не логично, но задача стоит посчитать, считаем:
//3333-1750=1583 это деньги которы мы откладываем каждый месяц
//8000/1583=5,05369551 получаеться чуть больше 5 месяцев, в зависимости от того сколько дней в месяце,
//можно посчитать за сколько дней мы бы насобирали нужную сумму
// ========== END TASK 16 ============================================================

// ========== TASK 17 ==========
function sumOfNegativeNumbers() {
  let sum = 0;
  for (i = 0; i < 10; i += 1) {
    const num = +prompt("Введите число");
    if (num < 0) {
      sum += num;
    }
  }
  return sum;
}

// console.log(sumOfNegativeNumbers());
//про проверку на не число или на нажатие крестика(отмены) небыло нечего сказано
//если вводить только цифры всё работает
// ========== END TASK 17 ============================================================
