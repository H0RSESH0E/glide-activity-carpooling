const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".nav-link");
const outerDiv = document.querySelector(".outer-div");

function mobileMenu() {
    console.log('CLICK burger');
    console.log(navMenu.style);
    console.log(outerDiv.style);

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        outerDiv.style.opacity = "1"
      } else {
        navMenu.style.display = "block";
        outerDiv.style.opacity = "0.2"

      }

    // hamburger.classList.toggle("active");
    // navMenu.classList.toggle("active");
}



function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);

navLink.forEach(n => n.addEventListener("click", closeMenu));

{/* <script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script> */}