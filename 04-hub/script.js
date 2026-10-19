let myLvl = 7;
function play(need) {
  if (myLvl >= need) {
    alert("Запускаю!");
  } else {
    alert(`Треба рівень ${need}, у тебе ${myLvl}`);
  }
}
function levelUp() {
  if (myLvl < 20) {
    myLvl = myLvl + 1;
    alert(`Рівень: ${myLvl}`);
  }
  if (myLvl >= 20) {
    myLvl = 20;
    alert("Максимальний рівень!");
  }
}

let likes = 0;
function like() {
  likes = likes + 1;
  alert(`Лайків: ${likes}`);
}
