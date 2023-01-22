document.onclick = function (e) {
  // показує координати точки ;
  coords.innerHTML = e.clientX + ":" + e.clientY + " кліка";
};

const div = document.querySelector("#field");

const coordinates = div.getBoundingClientRect();
// console.log(coordinates);
// console.log(div.clientLeft);
// console.log(div.clientWidth);
//console.log(div.clientTop);
//console.log(div.clientHeight);
//console.log(coordinates.top);

//• верхній лівий зовнішній кут (це просто).
const leftTopOutside = [coordinates.left, coordinates.top];
// console.log(leftTopOutside);
//• нижній правий, зовнішній кут (теж просто).
const bottomRightOutside = [coordinates.bottom, coordinates.right];
//• верхній лівий, внутрішній кут (трохи складніше).
const topLeftInside = [
  coordinates.left + div.clientLeft,
  coordinates.top + div.clientTop,
];
// console.log(topLeftInside);
//• нижній правий, внутрішній кут (є кілька способів, виберіть один).
const bottomRightInside = [
  coordinates.left + div.clientLeft + div.clientWidth,
  coordinates.top + div.clientTop + div.clientHeight,
];
//console.log(bottomRightInside);
