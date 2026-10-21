let phrases = ["Ярік дяка що сидиш з мною в дс","Юра поганець","Ехіч математик"]
function say() {
 

let i = Math.floor(Math.random() * phrases.length);
return phrases[i];
}
console.log(say());
console.log(say());
console.log(say());