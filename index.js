// ========== TASK 1 ==========
const div = document.querySelector("div");
const ul = document.querySelector("ul");
const secondLi = ul.childNodes[3];
// console.log(ul.children[0].previousSibling);
// ========== END TASK 1 ============================================================

// ========== TASK 2 ==========
/*Якщо elem – довільний вузол DOM-елемента.
• Правда, що elem.lastChild.nextSibling завжди дорівнює null ? всегда -
Свойство Node.nextSibling используется только для чтения и возвращает узел, 
непосредственно следующий за данным узлом в списке childNodes его родительского элемента, 
или null если данный узел последний в этом списке.

• Правда, що elem.children[0].previousSibling завжди дорівнює null? - нет, если после тега родителя
стоит перенос строки (что чаще всего бывает), вернет #text*/
// ========== END TASK 2 ============================================================

// ========== TASK 3 ==========
//Пришлось немного запариться чтобы создать таблицу через цикл в JS, но было интересно
const divTask3 = document.querySelector(".task-3");
function createTable() {
  let table = document.createElement("table");

  for (let j = 0; j < 5; j++) {
    let tr = table.appendChild(document.createElement("tr"));
    for (let i = 0; i < 5; i++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.textContent = `${j + 1}.${i + 1}`;
      td.style.border = "1px solid purple";
      if (i === j) {
        td.style.background = "red";
      }
    }
  }

  divTask3.append(table);
}

createTable();
// ========== END TASK 3 ============================================================

// ========== TASK 4 (в задании второе третье) ==========
//• Таблицю з id="age-table".
const tableTask4 = document.querySelector("#age-table");
// console.log(tableTask4);
//• Всі елементи label всередині цієї таблиці (їх три).
const childrenTable = tableTask4.querySelectorAll("label");
// console.log(childrenTable);
//• Перший td у цій таблиці (зі словом "Age ").
const firstTd = tableTask4.querySelector("td"); // так как нужно найти первую ячеку, доп параметры можно не указывать
// console.log(firstTd);
//• Форму form з ім'ям name = "search".
const formSearch = document.querySelector("form[name=search]");
// console.log(formSearch);
//• Перший input у цій формі.
const firstInput = formSearch.children[0].children[0]; //firstElementChild
// console.log(firstInput);
//• Останній input у цій формі.
const lastInput = formSearch.children[1]; //lastElementChild
// console.log(lastInput);
// ========== END TASK 4 ============================================================

// ========== TASK 4 ==========
//1. Який у ньому текст (без піддерева)?
const ulTask4 = document.querySelector(".tast-4");

function showTextChildren() {
  for (const child of ulTask4.children) {
    console.log(child.textContent);
  }
}
// showTextChildren();
//2. Яка кількість нащадків – всіх вкладених (включаючи глибоко вкладені)?
//Всё что ниже закоментиоровано это я пытался решить задачу самостоятельно
//Я смог вывести все дочерние элементы любой вложенности в консоль, а вот
//посчитать не вышло, решение которое я предлагаю я подсмотрел, но я понял
//что там написано, у меня была идея сделать подобное решение, в смысле пушить каждый
//элемент в массив, но реализовать самостоятельно не вышло

// function getAmountChildren(par) {
//   let count = 0;
//   if (par.children.length) {
//     for (let i = 0; i < par.children.length; i += 1) {
//       count += 1;
//       console.log(par.children[i]);
//       getAmountChildren(par.children[i]);
// console.log(ulTask4.childElementCount);
// }
// return function () {
//   return (count += 1);
// };
//     return count;
//   } else {
//     return count;
//   }
// }
//return function () {
//return (count += 1);
//};
// console.log(getAmountChildren(ulTask4));
// console.log(getAmountChildren(ulTask4.children[0]));
// console.log(getAmountChildren(ulTask4.children[1]));

const getElementsWithDepth = (el) =>
  [...el.children].reduce(
    (acc, n) => {
      acc.push(...getElementsWithDepth(n));
      return acc;
    },
    [{ el }]
  );

function getAmountChildren(par) {
  return getElementsWithDepth(par).length - 1;
}

// console.log(getAmountChildren(ulTask4));
// ========== END TASK 4 ============================================================

// ========== TASK 5 ==========
//Алерт будет вызван,
//document.body.lastChild.nodeType
//document - Каждая веб-страница, которая загружается в браузер, имеет свой собственный объект document.
//Интерфейс документа служит точкой входа для получения содержимого веб - страницы
//body - Элемент <body> предназначен для хранения содержания веб-страницы (контента), отображаемого в окне браузера
//lastChild - последний потомок body
//nodeType - Доступное только для чтения свойство Node.nodeType возвращает беззнаковое короткое целочисленное значение,
//представляющее тип узла.
//alert вызывает окно с содержимым
//<script> выполняет содержимое скрипта внурти тега, по этому и срабатывает alert
// ========== END TASK 5 ============================================================

// ========== TASK 6 ==========
//скрипт выведит BODY, ответ в html файле
// ========== END TASK 6 ============================================================

// ========== TASK 7 ==========
//1. Об'єктом якого класу є document? по поводу класса не знаю, но являеться частью обьекта window
//2. Яке місце він посідає у DOM-ієрархії? document - первый (самый высокий) в иерархии, от него всё начинается
//3. Чи успадковує він від Node чи від Element, чи може від HTMLElement? Интерфейс Document наследует интерфейсы Node и EventTarget
// ========== END TASK 7 ============================================================

// ========== TASK 8 ==========
const elem = document.querySelector("#elem");
function clear(elem) {
  elem.replaceChildren();
  //elem.innerHTML = '';
}
clear(elem);
// ========== END TASK 8 ============================================================

// ========== TASK 9 ==========
// alert(table); // таблиця, як і має бути
// console.log(table.childNodes);
// table.remove(); // Чому в документі залишився текст "ааа"?
//Метод Element.remove() удаляет элемент из DOM - дерева, в котором он находится.
// текст ааа являеться - HTMLElement.outerText
// ========== END TASK 9 ============================================================

// ========== TASK 10 ==========
const ulTask10 = document.querySelector(".ulTask10");

function addListItem() {
  let inputText = "";
  do {
    inputText = prompt("Введите элемент списка");
    if (inputText === "" || !Boolean(inputText)) {
      return;
    }
    let li = ulTask10.appendChild(document.createElement("li"));
    li.textContent = inputText;
    // ulTask10.append(li);
  } while (inputText);
}

// addListItem();
// ========== END TASK 10 ============================================================

// ========== TASK 11 ==========
const ulTask11 = document.querySelector("#ulTask11");

let li2 = document.createElement("li");
li2.textContent = 2;
let li3 = document.createElement("li");
li3.textContent = 3;

ulTask11.firstElementChild.append(li2, li3);
// ========== END TASK 11 ============================================================
