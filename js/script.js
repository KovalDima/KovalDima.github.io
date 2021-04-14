function burgerMenu() {
  const menu = document.querySelector(".menu__list_js"),
    menuItem = document.querySelectorAll(".menu__list-item_js"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu__list_js-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu__list_js-active");
    });
  });
}

burgerMenu();
