function damage(hp, attack) {
  const newHp = hp - attack;
  if (newHp < 0) {
    return 0;
  }
  return newHp;
}

let heroHp = 100;
heroHp = damage(heroHp, 30);
console.log(`HP: ${heroHp}`);
