const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const img = document.querySelector('.gallery');
console.log(img.innerHTML);

// const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = images
  .map((img) => `<li class="img-item"><img src=${img.url} alt=${img.alt}></img></li>`)
  .join("");

img.insertAdjacentHTML("beforeend", markup);
console.log(markup);