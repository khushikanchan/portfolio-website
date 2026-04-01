function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}