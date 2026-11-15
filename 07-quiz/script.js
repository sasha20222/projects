let questions = [
  {
    question: "Як звали першу дінастію Китаю?",
    options: ["Чінгисхан", "Цін", "Шін"],
    correct: 0,
  },
  {
    question: "Яка столиця Франції?",
    options: ["Берлін", "Париж", "Мадрид"],
    correct: 1,
  },
  {
    question: "Яка планета найбільша в Сонячній системі?",
    options: ["Земля", "Юпітер", "Сатурн"],
    correct: 1,
  },
  {
    question: "Скільки уроків у 7б класі?побег не рахуємо",
    options: ["5", "6", "7"],
    correct: 1,
  },
  {
    question: "Яка столиця України?",
    options: ["Київ", "Львів", "Одеса"],
    correct: 0,
  },
];
querySelector("#question1").textContent = questions[0].question;
querySelector("#option1-1").textContent = questions[0].options[0];
querySelector("#option1-2").textContent = questions[0].options[1];
querySelector("#option1-3").textContent = questions[0].options[2];
querySelector("#question2").textContent = questions[1].question;
querySelector("#option2-1").textContent = questions[1].options[0];
querySelector("#option2-2").textContent = questions[1].options[1];
querySelector("#option2-3").textContent = questions[1].options[2];
querySelector("#question3").textContent = questions[2].question;
querySelector("#option3-1").textContent = questions[2].options[0];
querySelector("#option3-2").textContent = questions[2].options[1];
querySelector("#option3-3").textContent = questions[2].options[2];
querySelector("#question4").textContent = questions[3].question;
querySelector("#option4-1").textContent = questions[3].options[0];
querySelector("#option4-2").textContent = questions[3].options[1];
querySelector("#option4-3").textContent = questions[3].options[2];
querySelector("#question5").textContent = questions[4].question;
querySelector("#option5-1").textContent = questions[4].options[0];
querySelector("#option5-2").textContent = questions[4].options[1];
querySelector("#option5-3").textContent = questions[4].options[2];

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
