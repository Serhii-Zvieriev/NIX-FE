//<!-- <button class="remove-button">[x]</button> -->
// const removeButton = document.createElement("button");
// removeButton.className = "remove-button";
// removeButton.textContent = "[x]";

const panes = document.querySelectorAll(".pane");
// console.log(panes);
// for (let pane of panes) {
//   pane.prepend(removeButton);
// }
// panes.forEach((el) => el.prepend(removeButton)); //не сработало ((
//Если элемент для вставки уже находится в DOM, то он изымается из
//своего старого места и добавляется в новое.Отсюда вытекает правило -
//один и тот же элемент не может быть одновременно в двух местах.

for (let pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  pane.firstChild.onclick = () => pane.remove();
}
