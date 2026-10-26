let boss = {
  name: "юра",
  hp: 25000,
  dizlaik: "yes",
};
function Boss() {
  alert(`${boss.name} ${boss.hp} ${boss.dizlaik}`);
}
let moder = ["Дам тобі пермач", "Бійся", "Я тебе забаню"];
function say() {
  return moder[Math.floor(Math.random() * moder.length)];
}
function banseco(hp, sila) {
  if (sila >= hp) {
    return 0;
  }
  return hp - sila;
}

function hit() {
  boss.hp = banseco(boss.hp, upgrade(myLvl));
  if (boss.hp === 0) {
    alert("Перемога! 🏆");
  } else {
    alert(`${boss.name}: ${boss.hp} HP`);
  }
  alert(`${boss.name}: ${boss.hp} HP. ${say()}`);
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
  boss.hp = banseco(boss.hp, upgrade(myLvl) * 2);
  if (boss.hp === 0) {
    alert("Перемога! 🏆");
  } else {
    alert(`${boss.name}: ${boss.hp} HP`);
  }
  alert(`${boss.name}: ${boss.hp} HP. ${say()}`);
}
function teach() {
  moder.push("Тепер я зліше!");
  alert(`Тепер ${boss.name} знає ${moder.length} фрази`);
}
function combo() {
  for (let i = 0; i < 8; i++) {
    boss.hp = banseco(boss.hp, upgrade(myLvl));
  }
  alert(`Комбо! юра: ${boss.name} HP`);
}

let text = "";
function frazy() {
  text = "";
  for (let i = 0; i < moder.length; i++) {
    text += moder[i] + " ";
  }
  alert(`${text}`);
}
