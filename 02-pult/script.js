let hp=100;
function hit(){
if(hp >= 0){
    hp -=30;
    console.log(`Удар! HP: ${hp}.`);
}
}
function heal(){
if(hp < 100){
    hp +=20;
    console.log(`Аптечка! HP: ${hp}.`);
}
}
function showHp(){
    alert(`HP: ${hp}.`);
}   
