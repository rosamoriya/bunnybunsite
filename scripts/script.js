//Function for Navigation interation

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");

  hamburgerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-open");
  });
});
