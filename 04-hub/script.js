let myLvl = 7;
function play(need) {
  myLvl >= need
    ? alert("Запускаю!")
    : alert(`Треба рівень 10, у тебе ${myLvl}`);
}
function levelup() {
  myLvl = myLvl + 1;
  alert(`Рівень: ${myLvl}`);
}
