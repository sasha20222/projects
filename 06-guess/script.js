let secret = Math.floor(Math.random() * 100) + 1;
let tries = 0;
document.querySelector("#history").textContent;

function check() {
  const guess = document.querySelector("#guess");
  const message = document.querySelector("#hint");
  const value = Number(guess.value);

  if (guess.value === "" || Number.isNaN(value) || value < 1 || value > 100) {
    message.textContent = "Будь ласка, введіть число від 1 до 100.";
    return;
  }

  tries += 1;

  if (value < secret) {
    message.textContent = `Спроб ${tries}. Число більше.`;
  } else if (value > secret) {
    message.textContent = `Спроб ${tries}. Число менше.`;
  } else {
    message.textContent = `Вітаю! Ви вгадали число ${secret} за ${tries} спроб.`;
    message.classList.add("win");
  }
  const li = document.createElement("li");
  li.textContent = value + " → " + message.textContent;
  list.append(li);
}

document.querySelector("#check").addEventListener("click", check);

function reset() {
  secret = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  const message = document.querySelector("#hint");
  message.textContent = "Введіть число від 1 до 100";
  message.classList.remove("win");
  list.inerHTML = "";
}

document.querySelector("#new-game").addEventListener("click", reset);
