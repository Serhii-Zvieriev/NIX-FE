const select = document.querySelector("#genres");
console.dir(select);

//1. Виведіть значення та текст вибраного пункту.
const selectedOption = genres.options[genres.selectedIndex];
console.dir(genres.options);
console.log(selectedOption.value);
console.log(selectedOption.text);
//2. Додайте пункт: <option value="classic">Класика</option>.
const newGenreClassic = new Option("Классика", "classic");
genres.append(newGenreClassic);
//3. Зробіть його вибраним.
newGenreClassic.selected = true;
