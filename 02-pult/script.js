let hp = 100;
function hit() {
  if (hp >= 0) {
    hp -= 30;
    if (hp < 0) {
      hp = 0;
    }
    console.log(`Удар! HP: ${hp}.`);
  }
}
function heal() {
  if (hp <= 100) {
    hp += 20;
    if (hp > 100) {
      hp = 100;
    }
    console.log(`Аптечка! HP: ${hp}.`);
  }
}
function showHp() {
  alert(`HP: ${hp}.`);
}
