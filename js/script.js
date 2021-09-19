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

  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".menu__list_js") === null &&
      e.target.closest(".hamburger") === null
    ) {
      menu.classList.remove("menu__list_js-active");
      hamburger.classList.remove("hamburger_active");
    }
  });
}

burgerMenu();

/* if (document.documentElement.clientWidth < 750) {
  window.onscroll = function () {
    const header = document.querySelector(".header");
    if (window.pageYOffset > 45 && window.pageYOffset < 1000) {
      header.classList.add("hidden");
      header.classList.remove("show");
    } else if (window.pageYOffset < 45 || window.pageYOffset > 1000) {
      header.classList.remove("hidden");
      header.classList.add("show");
    }
  };
} */

function toggleHeader() {
  const header = document.querySelector(".header");
  let scrollPrev = 0;

  window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;
    if (scrolled > 45 && scrolled > scrollPrev) {
      header.classList.add("hidden");
      header.classList.remove("show");
    } else {
      header.classList.remove("hidden");
      header.classList.add("show");
    }
    scrollPrev = scrolled;
  });
}

toggleHeader();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
