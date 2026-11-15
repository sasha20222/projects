let score = 0;
rightBtn = document.getElementById("right");
wrongBtn = document.getElementById("wrong");
function right() {
  let result = document.getElementById("result");
  score += 1;
  result.textContent = "Вірно! Ваш рахунок: " + score;
  result.classList.add("right");
}
function wrong() {
  let result = document.getElementById("result");
  score -= 1;
  result.textContent = "Невірно! Ваш рахунок: " + score;
  result.classList.add("wrong");
}
rightBtn.addEventListener("click", right);
wrongBtn.addEventListener("click", wrong);
