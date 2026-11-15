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

let score = 0;
const rightBtn = document.getElementById("right");
const wrongBtn = document.getElementById("wrong");
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
