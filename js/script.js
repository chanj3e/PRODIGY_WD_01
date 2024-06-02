"strict";

const nav = document.querySelector("#nav");
const navItems = document.querySelectorAll(".nav-item");
const verifyNav = document.querySelector;

nav.addEventListener("click", function (e) {
  // e.preventDefault();
  const clicked = e.target.closest(".nav-item");
  if (!clicked) return;
  console.log(clicked);
  navItems.forEach((item) => item.classList.remove("active"));
  clicked.classList.add("active");
});
