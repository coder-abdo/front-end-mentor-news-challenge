const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
  menu.classList.add("show");
  overlay.classList.add("show");
});
closeButton.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});
