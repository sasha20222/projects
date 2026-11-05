let coins = 100;

function bet() {
 const value = Number(document.querySelector('#coins').value);
  const msg = document.querySelector('#msg');
  if (value < 1 || value > 100|| Number.isNaN(value) ) {
    msg.textContent = 'Не можна'; 
    return;
  }
  coins -= value;
  document.querySelector('#coins').textContent = coins;
}

document.querySelector('#go').addEventListener('click', bet);