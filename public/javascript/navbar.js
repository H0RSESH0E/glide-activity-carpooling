const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".nav-link");
const outerDiv = document.querySelector(".outer-div");

function mobileMenu() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        outerDiv.style.opacity = "1"
      } else {
        navMenu.style.display = "block";
        outerDiv.style.opacity = "0.15"
      }
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);

navLink.forEach(n => n.addEventListener("click", closeMenu));

