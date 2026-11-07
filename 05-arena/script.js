let hero = { name: "Сашко", hp: 30000 };
let boss = {
  name: "юра",
  hp: 25000,
  dizlaik: "yes",
  power: 677,
};
function biy() {
  let text = "";
  let r = 1;
  while (hero.hp > 0 && boss.hp > 0) {
    boss.hp = banseco(boss.hp, upgrade(myLvl));
    if (boss.hp > 0) {
      hero.hp = banseco(hero.hp, boss.power);
    }
    text += `Раунд ${r}: герой ${hero.hp}, ${boss.name} ${boss.hp}\n`;
    r += 1;
  }
  alert(text);
}

let coins = 56;
let hilka = [
  { name: "Пермач юрі", price: 66, heal: 25 },
  { name: "Дзвінок Ехічу", price: 15, heal: 66 },
  { name: "Смс Тайменду", price: 50, heal: 88 },
];
hilka.push({ name: "Нове зілля", price: 20, heal: 40 });
function zbir() {
  document.querySelector("#shop").innerHTML = "";
  for (let v of hilka) {
    const li = document.createElement("li");
    li.textContent = `${v.name} — ${v.price} монет`;
    if (v.price <= coins) {
      li.classList.add("cheap");
    } else {
      li.classList.add("expensive");
    }
    document.querySelector("#shop").append(li);
  }
}
function buy(k) {
  let item = hilka[k]; // беремо картку під номером k
  if (coins >= item.price) {
    // вистачає монет?
    coins -= item.price; // так: мінус ціна
    boss.hp += item.heal;

    alert(`Купив ${item.name}! Монет: ${coins}`);
  } else {
    alert("Не вистачає монет"); // ні: нічого не міняємо
  }
  zbir();
}
function buy0() {
  buy(0);
}
function buy1() {
  buy(1);
}
function buy2() {
  buy(2);
}
let moderi = [
  { name: "btnep", hp: 899 },
  { name: "pikachy", hp: 999 },
  { name: "bisenyn", hp: 99 },
];

function wave() {
  let text = "";
  let alive = 0;

  for (let m of moderi) {
    let was = m.hp;
    m.hp = banseco(m.hp, upgrade(myLvl));
    if (was > 0 && m.hp === 0) coins += 50;
    if (m.hp > 0) {
      alive += 1;
      text += `${m.name}: ${m.hp} HP `;
    }
  }
  alert(text);
  if (alive === 0) {
    alert("Усіх мобів переможено! ");
  }
}

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
  console.log("удар");
  boss.hp = banseco(boss.hp, upgrade(myLvl));
  if (boss.hp === 0) {
    alert("Перемога! 🏆");
  } else {
    alert(`${boss.name}: ${boss.hp} HP`);
  }
  alert(`${boss.name}: ${boss.hp} HP. ${say()}`);
  showBoss();
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
  showBoss();
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
function ready() {
  const hp = document.querySelector("#hp");
  hero.hp = Number(hp.value);
  console.log(hp);
  const nick = document.querySelector("#nick");
  hero.name = nick.value;
  console.log(nick);
  const status = document.querySelector("#status");
  status.textContent = `Герой ${hero.name} готовий з ${hero.hp} HP`;
}

function shield() {
  document.querySelector("img").classList.toggle("shield");
}

function showBoss() {
  const bossBar = document.querySelector("#bossBar");
  const bossHp = document.querySelector("#bossHp");
  bossBar.style.width = boss.hp / 100 + "px";
  if (boss.hp < 5000) {
    bossBar.classList.add("low");
  }
  bossHp.textContent = `${boss.name}: ${boss.hp} HP`;
  if (boss.hp === 0) {
    bossBar.classList.add("dead");
  }
}
showBoss();
document.querySelector("#hit").addEventListener("click", hit);
document.querySelector("#strongHit").addEventListener("click", strongHit);
document.querySelector("#shield").addEventListener("click", shield);
document.querySelector("#ready").addEventListener("click", ready);
document.querySelector("#biy").addEventListener("click", biy);
document.querySelector("#teach").addEventListener("click", teach);
document.querySelector("#combo").addEventListener("click", combo);
document.querySelector("#frazy").addEventListener("click", frazy);
document.querySelector("#Boss").addEventListener("click", Boss);
document.querySelector("#wave").addEventListener("click", wave);
document.querySelector("#zbir").addEventListener("click", zbir);
document.querySelector("#buy0").addEventListener("click", buy0);
document.querySelector("#buy1").addEventListener("click", buy1);
document.querySelector("#buy2").addEventListener("click", buy2);
document.querySelector("#levelUp").addEventListener("click", levelUp);
console.log("Арена готова!");
function keys(event) {
  if (event.target.tagName === "INPUT") return;
  if ("1" === event.key) {
    hit();
  } else if ("2" === event.key) {
    strongHit();
  } else if ("3" === event.key) {
    shield();
  }
}
document.addEventListener("keydown", keys);
function heal() {
  boss.hp += 100;
  if (boss.hp > 25000) {
    boss.hp = 25000;
  }
  showBoss();
}
healTimer = setInterval(heal, 2000);
function poison() {
  clearInterval(healTimer);
  alert("Отрута! Відновлення здоров'я боса зупинено!");
}
document.querySelector("#poison").addEventListener("click", poison);
