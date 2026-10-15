let gold = 100;
function finalPrice(price) {
  return price;
}

function buy(price) {
  let cost = finalPrice(price);
  if (gold >= cost) {
    gold -= cost;
    console.log(`Куплено за ${cost}! Золото: ${gold}`);
  } else {
    console.log(`Бракує ${cost - gold}`);
  }
}
function wallet() {
  alert(`Золото: ${gold}`);
}
