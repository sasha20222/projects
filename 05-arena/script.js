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
