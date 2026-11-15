let questions = document.querySelectorAll(".question");
document.querySelector("#question1").textContent = questions[0].question;
document.querySelector("#option1-1").textContent = questions[0].options[0];
document.querySelector("#option1-2").textContent = questions[0].options[1];
document.querySelector("#option1-3").textContent = questions[0].options[2];
document.querySelector("#question2").textContent = questions[1].question;
document.querySelector("#option2-1").textContent = questions[1].options[0];
document.querySelector("#option2-2").textContent = questions[1].options[1];
document.querySelector("#option2-3").textContent = questions[1].options[2];
document.querySelector("#question3").textContent = questions[2].question;
document.querySelector("#option3-1").textContent = questions[2].options[0];
document.querySelector("#option3-2").textContent = questions[2].options[1];
document.querySelector("#option3-3").textContent = questions[2].options[2];
document.querySelector("#question4").textContent = questions[3].question;
document.querySelector("#option4-1").textContent = questions[3].options[0];
document.querySelector("#option4-2").textContent = questions[3].options[1];
document.querySelector("#option4-3").textContent = questions[3].options[2];
document.querySelector("#question5").textContent = questions[4].question;
document.querySelector("#option5-1").textContent = questions[4].options[0];
document.querySelector("#option5-2").textContent = questions[4].options[1];
document.querySelector("#option5-3").textContent = questions[4].options[2];

let score = 0;
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
