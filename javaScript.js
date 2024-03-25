// ---------------- MENU HAMBURGER --------------------

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("hamburger-menu");

  hamburger.addEventListener("click", function () {
    // Toggle menu visibility
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});
