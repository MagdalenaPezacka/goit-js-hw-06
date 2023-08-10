const zip = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleRange = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
};
zip.addEventListener('input', handleRange);

// second version//
// const zip = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// zip.addEventListener('change', event => {
//   text.style.fontSize = event.currentTarget.value + "px";
// });
