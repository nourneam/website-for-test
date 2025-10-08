const navLinks = document.querySelectorAll("#navbarSupportedContent .nav-link");
const menuCollapse = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuCollapse, {
  toggle: false,
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.hide();
  });
});
