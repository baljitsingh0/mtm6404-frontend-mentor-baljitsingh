const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".desktop-nav");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
