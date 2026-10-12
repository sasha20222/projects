let hp=100;
function hit(){
    hp -=30;
    console.log(`Удар! HP: ${hp}.`);
}
function heal(){
    hp +=20;
    console.log(`Аптечка! HP: ${hp}.`);
}
function showHp(){
    alert(`HP: ${hp}.`);
}