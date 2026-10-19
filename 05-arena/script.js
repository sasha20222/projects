let bansec = 1000;
function banseco(hp, sila) {
  if (sila >= hp) {
    return 0;
  }
  return hp - sila;
}
let sila = 900;
function hit() {
  bansec = banseco(bansec, sila);
  alert(`Удар! HP: ${bansec}`);
}
let myLvl = 7;
function levelUp() {
  myLvl++;
  sila += 100;
  alert(`Рівень підвищено! Поточний рівень: ${myLvl}`);
}
function upgrade(level) {
  if (myLvl >= level && level < 5) {
    sila += 10;
    alert(`Потужність збільшено! Поточна потужність: ${sila}`);
    return;
  }
  if (myLvl > level && level >= 5) {
    sila += 100;
    alert(`Потужність збільшено! Поточна потужність: ${sila}`);
    return;
  }
  bansec = banseco(bansec, sila);
  return;
}
