const navigation = document.querySelector("nav");
const navToggle = navigation.querySelector(".nav__btns");


navToggle.addEventListener("click", () => {
  navigation.classList.toggle("show-mobile-nav");
});
