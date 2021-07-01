const menu = document.getElementById("menu-bars"),
  menuClose = document.getElementById("menu-close"),
  navUl = document.getElementById("nav-ul"),
  allNavLi = navUl.getElementsByTagName("LI");

// Open Menu
const handleMenuOpen = () => {
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
  navUl.style.display = "flex";
  menuClose.classList.toggle("show");
  menuClose.classList.toggle("hide");
};

// Close Menu
const handleMenuClose = () => {
  menu.classList.toggle("hide");
  menu.classList.toggle("show");
  navUl.style.display = "none";
  menuClose.classList.toggle("show");
  menuClose.classList.toggle("hide");
};

menu.addEventListener("click", handleMenuOpen);
menuClose.addEventListener("click", handleMenuClose);

// Close menu on meun-item click
for (let i = 0; i < allNavLi.length; i++) {
  if (screen.width <= 580)
    allNavLi[i].addEventListener("click", handleMenuClose);
}
