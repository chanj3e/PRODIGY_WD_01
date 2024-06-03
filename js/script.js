"strict";

const nav = document.querySelector("#nav");
const navItems = document.querySelectorAll(".nav-item");
const header = document.querySelector("header");
const active = document.querySelector(".active");
const navImg = document.querySelector(".nav-img");
const verifyNav = document.querySelector;

nav.addEventListener("click", function (e) {
  // e.preventDefault();
  const clicked = e.target.closest(".nav-item");
  if (!clicked) return;
  console.log(clicked);
  navItems.forEach((item) => item.classList.remove("active"));
  clicked.classList.add("active");
});

const sticky = header.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    navItems.forEach((i) => (i.style.color = "#212b36"));
    active.style.color = "blue";
    navImg.src = "/images/logo-2.png";
  } else {
    header.classList.remove("sticky");
    navItems.forEach((i) => (i.style.color = "white"));
    active.style.color = "wheat";
    navImg.src = "/images/logo.png";
  }
};
