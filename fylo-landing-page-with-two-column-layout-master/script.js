const form = document.querySelector("form");
const input = document.querySelector("input");
const msgContainer = document.querySelector("small");

const validateForm = () => {
  isValid = form.checkValidity();
  if (!isValid) {
    msgContainer.innerText = "Please check your email";
    input.style.borderColor = "red";
  }
};

const submitForm = (e) => {
  e.preventDefault();

  validateForm();
};

// forms.forEach((form) => {
//   form.addEventListener("submit", submitForm);
// });

form.addEventListener("submit", submitForm);
