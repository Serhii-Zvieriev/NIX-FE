document.onclick = function (e) {
  let mouse = [e.clientX, e.clientY];
  console.log(mouse);

  const field = document.querySelector("#field");
  const ball = document.querySelector("#ball");

  const fieldСoordinates = field.getBoundingClientRect();
  // console.log(fieldСoordinates);
  let ballСoordinates = ball.getBoundingClientRect();
  // console.log(ballСoordinates);

  ballСoordinates = {
    top:
      e.clientY -
      fieldСoordinates.top -
      field.clientTop -
      ball.clientHeight / 2,
    left:
      e.clientX -
      fieldСoordinates.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  if (ballСoordinates.top < 0) ballСoordinates.top = 0;
  if (ballСoordinates.left < 0) ballСoordinates.left = 0;
  if (ballСoordinates.left + ball.clientWidth > field.clientWidth) {
    ballСoordinates.left = field.clientWidth - ball.clientWidth;
  }
  if (ballСoordinates.top + ball.clientHeight > field.clientHeight) {
    ballСoordinates.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.top = ballСoordinates.top + "px";
  ball.style.left = ballСoordinates.left + "px";
};
