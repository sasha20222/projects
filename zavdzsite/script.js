const log = document.querySelector("#log");
let i = 0;
function wave() {
  const li = document.createElement("li");
  i++;
  li.textContent = "Удар" + i;
  log.append(li);
}
document.querySelector("#hit").addEventListener("click", wave);
