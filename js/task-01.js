console.log(categories)
const itemElements = document.querySelectorAll("li.item");
console.log(`Number of categories:${itemElements.length}`)


itemElements.forEach(item => {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`)
const element = item.querySelectorAll("li");
  console.log(`Elements: ${element.length}`)
});
