const menu = document.querySelector(".menu");
let title = document.querySelector(".title");

title.onclick = function () {
  menu.classList.toggle("open");
};
