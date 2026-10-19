let myLvl = 7;
function play(need) {
  if (myLvl >= need) {
    alert("Запускаю!");
  } else {
    alert(`Треба рівень ${need}, у тебе ${myLvl}`);
  }
}
function levelUp() {
  myLvl = myLvl + 1;
  alert(`Рівень: ${myLvl}`);
}
