let score = 0;
let result = document.getElementById("result");
let scoreText = document.getElementById("score");

let rightBtns = document.querySelectorAll(".right-btn");
let wrongBtns = document.querySelectorAll(".wrong-btn");

function right(event) {
  score += 1;
  scoreText.textContent = "Рахунок: " + score;
  result.textContent = "✔";
  event.target.classList.add("right");
}

function wrong(event) {
  scoreText.textContent = "Рахунок: " + score;
  result.textContent = "✘";
  event.target.classList.add("wrong");
}

rightBtns.forEach(function (btn) {
  btn.addEventListener("click", right);
});

wrongBtns.forEach(function (btn) {
  btn.addEventListener("click", wrong);
});
