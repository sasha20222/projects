let gold = 100;
function finalPrice(price) {
  return price;
}
function buy(price) {
  let cost = finalPrice(price);
  if (gold >= 50) {
    gold -= 10;
    console.log(`Куплено за ${cost} ! Золото: ${gold}`);
  } else {
    console.log(`Бракує ${cost - gold};`);
  }
 
}
function wallet() {
  alert(`Золото: ${gold}`);
}
 wallet();