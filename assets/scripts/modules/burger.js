import { updateAriaAttributes, updateAriaHidden } from "./updateLinks.js";
import { toggleClass } from "./toggle.js";

export function openMenu() {
  const burgerButton = document.querySelector("#burger");
  const modal = document.querySelector("#modal");
  const sidebar = document.querySelector("#sidebar");

  if (!burgerButton || !modal || !sidebar) return;

  const handleToggle = (event) => {
    if (event?.type === "touchstart") event.preventDefault();

    toggleClass(burgerButton, "js-open-menu");
    toggleClass(modal, "js-open-modal");
    toggleClass(sidebar, "js-sidebar-open");

    const isOpenMenu = burgerButton.classList.contains("js-open-menu");
    updateAriaAttributes(isOpenMenu, burgerButton);

    const isOpenSidebar = sidebar.classList.contains("js-sidebar-open");
    updateAriaHidden(!isOpenSidebar, sidebar);
  };

  burgerButton.addEventListener("click", handleToggle);
  burgerButton.addEventListener("touchstart", handleToggle);
}
