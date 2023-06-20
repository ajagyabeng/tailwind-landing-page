const btn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  navMenu.classList.toggle("flex");
  navMenu.classList.toggle("hidden");
});
