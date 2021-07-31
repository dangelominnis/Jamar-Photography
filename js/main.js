// hamburger menu
const nav = document.getElementById("nav__mobile-ul");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});