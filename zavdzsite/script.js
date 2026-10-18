let hp = 100;
let attack = 20;
function damage(hp, attack) {
  hp -= attack;
  if (hp <= 0) {
    return 0;
  } else {
    return hp;
  }
}
