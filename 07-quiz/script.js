function checkAnswer(selectedButton, correctAnswer) {
  const buttons = selectedButton.parentElement.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button === right) {
      if (selectedButton.textContent === correctAnswer) {
        selectedButton.classList.add("right");
      } else {
        selectedButton.classList.add("wrong");
      }
    }
    score.textContent = `Рахунок: ${scoreValue}`;
  });
}
