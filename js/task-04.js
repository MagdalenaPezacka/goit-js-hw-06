let counterValue = 0;
const counter = document.querySelector("#value");
const decrListenerBtn = document.querySelector('button[data-action="decrement"]');
const incrListenerBtn = document.querySelector('button[data-action="increment"]');

decrListenerBtn.addEventListener("click", () => {
  counterValue--
  counter.textContent = counterValue
});

incrListenerBtn.addEventListener("click", () => {
  counterValue++
  counter.textContent = counterValue
});