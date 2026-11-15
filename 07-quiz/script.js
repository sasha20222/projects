let questions = [
  {
    text: "Як звали першу династію Китаю?",
    a: ["Чингісхан", "Цінь", "Шін"],
    right: 1,
  },
  {
    text: "Яка столиця Франції?",
    a: "Берлін",
    b: "Париж",
    c: "Мадрид",
    right: 1,
  },
  {
    text: "Яка планета найбільша в Сонячній системі?",
    a: "Земля",
    b: "Юпітер",
    c: "Сатурн",
    right: 1,
  },
  {
    text: "Скільки уроків у 7б класі? (побег не рахуємо)",
    a: "5",
    b: "6",
    c: "7",
    right: 1,
  },
  {
    text: "Яка столиця України?",
    a: "Київ",
    b: "Львів",
    c: "Одеса",
    right: 0,
  },
];
let currentQuestion = 0;
let score = 0;
function showQuestion() {
  let question = questions[currentQuestion];
}
function nextQuestion() {
  currentQuestion++;
}
