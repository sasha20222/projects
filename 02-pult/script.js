let hp=100;
function hit(){
    hp -=30;
    console.log(`HP: ${hp}.`);
}
function heal(){
    hp +=20;
    console.log(`HP: ${hp}.`);
}
function showHp(){
    alert(`HP: ${hp}.`);
}