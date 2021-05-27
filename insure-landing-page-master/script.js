const navigation = document.querySelector("nav");
const mobileNav = document.querySelector('.nav__list-mobile')

const navToggle = navigation.querySelector(".nav__btns");


navToggle.addEventListener("click", () => {
  navigation.classList.toggle("show-mobile-nav");
  mobileNav.classList.toggle('show-mobile-nav')
});


