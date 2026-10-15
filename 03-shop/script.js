let gold = 100;
function finalPrice(price) {
  if (price >= 50) {
    return price - 10;
  }
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
