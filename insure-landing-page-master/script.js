const navigation = document.querySelector("nav");
const navToggle = navigation.querySelector(".nav__btns");

// navToggle.addEventListener('click', (e) => {
//   e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('show-mobile-nav');
// })

navToggle.addEventListener("click", () => {
  navigation.classList.toggle("show-mobile-nav");
});
