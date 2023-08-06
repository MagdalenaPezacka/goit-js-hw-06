const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingr1 = document.createElement("li");
ingr1.textContent = "Potatoes";
ingr1.classList.add("item");
console.log(ingr1);
const ingr2 = document.createElement("li");
ingr2.textContent = "Mushrooms";
ingr2.classList.add("item");
console.log(ingr2);
const ingr3 = document.createElement("li");
ingr3.textContent = "Garlic";
ingr3.classList.add("item");
console.log(ingr3);
const ingr4 = document.createElement("li");
ingr4.textContent = "Tomatos";
ingr4.classList.add("item");
console.log(ingr4);
const ingr5 = document.createElement("li");
ingr5.textContent = "Herbs";
ingr5.classList.add("item");
console.log(ingr5);
const ingr6 = document.createElement("li");
ingr6.textContent = "Condiments";
ingr6.classList.add("item");
console.log(ingr6);

const ulList = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingr) => `<li class="item">${ingr}</li>`)
  .join("");

// // Check the console, you'll see a single string with HTML tags
console.log(markup);

// // Adding all the markup in one operation
ulList.innerHTML = markup;