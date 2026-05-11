const $toggleButton = document.getElementById("toggle-menu");
const $primaryNavigation = document.getElementById("primary-navigation");
const $overlay = document.querySelector(".overlay");
const $iconUse = $toggleButton.querySelector("use");

const $navLinks = document.querySelectorAll(".primary-nav__link");

const ICON_PATH = "./assets/images/icons/sprites/ui.svg";


function closeMenu() {
  $primaryNavigation.dataset.state = "closed";
  $overlay.dataset.state = "closed";

  $iconUse.setAttribute("href", `${ICON_PATH}#bars`);

  $toggleButton.setAttribute("aria-expanded", "false");
  $toggleButton.setAttribute("aria-label", "Open menu");
}

function openMenu() {
  $primaryNavigation.dataset.state = "open";
  $overlay.dataset.state = "open";

  $iconUse.setAttribute("href", `${ICON_PATH}#close`);

  $toggleButton.setAttribute("aria-expanded", "true");
  $toggleButton.setAttribute("aria-label", "Close menu");
}


$toggleButton.addEventListener("click", () => {

  const isOpen = $primaryNavigation.dataset.state === "open";

  if (isOpen) closeMenu();
  else openMenu();

});


$navLinks.forEach(($link) => {
  $link.addEventListener("click", () => {
    closeMenu();
  });
});


$overlay.addEventListener("click", closeMenu);