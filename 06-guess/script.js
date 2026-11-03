secret = Math.floor(Math.random() * 100) + 1;
tries = 0;
function check() {
  const guess = document.querySelector("#guess");
  const message = document.querySelector("#hint");
  tries++;
  if (Number(guess.value) < secret) {
    message.textContent = `Спроб ${tries}. Число більше.`;
  } else if (Number(guess.value) > secret) {
    message.textContent = `Спроб ${tries}. Число менше.`;
  } else {
    message.textContent = `Вітаю! Ви вгадали число ${secret} за ${tries} спроб.`;
    message.classList.add("win");
  }
  document.querySelector("#check").addEventListener("click", check);
}
