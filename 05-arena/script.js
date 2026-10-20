let bansec = 25000;
function banseco(hp, sila) {
  if (sila >= hp) {
    return 0;
  }

  return hp - sila;
}

function hit() {
  bansec = banseco(bansec, upgrade(myLvl));
  if (bansec === 0) {
    alert("Перемога! 🏆");
  } else {
    alert(`юра: ${bansec} HP`);
  }
}

let myLvl = 1;
function levelUp() {
  myLvl++;
  alert(`Рівень підвищено! Поточний рівень: ${myLvl}`);
}
function upgrade(level) {
  if (level >= 15) {
    return 456;
  }
  if (level >= 10) {
    return 345;
  }
  if (level >= 5) {
    return 234;
  }
  return 89;
}
function strongHit() {
  bansec = banseco(bansec, upgrade(myLvl) * 2);
  if (bansec === 0) {
    alert("Перемога! 🏆");
  } else {
    alert(`юра: ${bansec} HP`);
  }
}
