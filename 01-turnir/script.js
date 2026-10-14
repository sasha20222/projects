let name = "гравець";
let lvl = 1;
let coins = 0;
console.log(`${name} має ${coins} грівнів та ${lvl} рівень`);
if (lvl < 5) {
  console.log("Рано, качайся");
} else if (coins < 100) {
  console.log(`Не вистачає ${100 - coins} монет`);
} else {
  console.log(`Заходь, ${name}!`);
}
alert(`Заходь, ${name}!`);
