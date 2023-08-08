const decrListenerBtn = document.querySelector('[data-action="decrement"]');
const incrListenerBtn = document.querySelector('[data-action="increment"]');

const counterValue = document.querySelector("#value");

const handleClick = () => {
  console.log(`"click event listener callback"`);
};

decrListenerBtn.addEventListener("click", () => {
  counterValue.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});

incrListenerBtn.addEventListener("click", () => {
  counterValue.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

