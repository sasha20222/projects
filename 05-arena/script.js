let bansec = 1000;
function banseco(hp, sila) {
  if (sila >= hp) {
    return 0;
  }
  return hp - sila;
}
let sila = 900;
function hit() {
  bansec = banseco(bansec, upgrade(myLvl));
  alert(`Удар! HP: ${bansec}`);
}
let myLvl = 1;
function levelUp() {
  myLvl++;
  sila += 100;
  alert(`Рівень підвищено! Поточний рівень: ${myLvl}`);
}
function upgrade(level) {
  if (myLvl >= 5) {
    return 234;
  }
  return 231;
}
if (myLvl >= 10) {
  return 345;
}
if (myLvl >= 15) {
  return 456;
}
