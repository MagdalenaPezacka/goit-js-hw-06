const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.value}, Passwor: ${password.value}`);
  event.currentTarget.reset();
});



//przykład z konspektu// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
