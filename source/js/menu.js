let menuBtn = document.querySelector(".page-header__button");
let menu = document.querySelector(".main-navigation");

menu.classList.remove("js");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  menu.classList.toggle("menu-open");
});
