// ========== TASK 2 ==========
const divTask2 = document.querySelector(".divTask2");

const h2 = document.createElement("h2");
h2.textContent = "Уведомление находится справа";

const p = document.createElement("p");
p.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis harum dolore quo quibusdam voluptatum alias! Dolor vero voluptatem, alias deserunt quaerat laboriosam eum voluptas tempore incidunt enim mollitia tempora?";

// divTask2.append(h2, p); - раскоментировать и заработает

const option = {
  top: 10, // 10px від верхньої межі вікна (за замовчуванням 0px)
  right: 10, // 10px від правого краю вікна (за замовчуванням 0px)
  html: "Hello!", // HTML-повідомлення
  className: "welcome", // Додатковий клас для div (необов'язково)
};

function showNotification(options) {
  const div = document.createElement("div");
  div.className = "notification";
  div.style.top = `${options.top}px`;
  div.style.right = `${options.right}px`;
  div.textContent = `${options.html}`;

  if (options.className) {
    div.classList.add(`${options.className}`);
  }

  divTask2.prepend(div);

  setTimeout(() => div.remove(), 1500);
}

// setInterval(() => {
//   showNotification(option);
// }, 2000);

// ========== END TASK 2 ============================================================
