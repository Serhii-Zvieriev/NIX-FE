/**
* Позиціонує елемент elem щодо елемента anchor відповідно до
значення position.
*
* @param {Node} anchor елемент, біля якого позиціонується інший
елемент
* @param {string} position одне з: top/right/bottom
* @param {Node} elem елемент, який позиціонується
*
* Обидва елементи elem і anchor повинні бути присутніми у
документі
*/

function getCoordinates(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  const anchorCoordinates = getCoordinates(anchor);

  switch (position) {
    case "top":
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top - elem.offsetHeight}px`;
      break;

    case "right":
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth}px`;
      elem.style.top = `${anchorCoordinates.top}px`;
      break;

    case "bottom":
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight}px`;
      break;
  }
}

/**
 * Показує нотатку із заданим вмістом на заданій позиції
 * Щодо елемента anchor. */
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

const blockquote = document.querySelector("blockquote");

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");
