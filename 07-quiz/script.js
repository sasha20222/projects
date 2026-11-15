function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const resultElement = document.getElementById("result");
  score += 1;
  result.textContent = "Вірно! Ваш рахунок: " + score;
}
