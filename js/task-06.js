const box = document.querySelector("#validation-input");
console.log(box.getAttribute('data-length'))

 const borderOnBlur = () => {
    if (Number(box.value.length) === Number(box.dataset.length)) { 
    box.classList.remove('invalid');
    box.classList.add('valid');
  } else {
    box.classList.remove('valid');
    box.classList.add('invalid');
  };
};
box.addEventListener('blur', borderOnBlur);