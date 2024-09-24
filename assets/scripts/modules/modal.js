import { toggleClass } from "./toggle.js";
import { updateAriaAttributes, updateAriaHidden } from "./updateLinks.js";

export function initializeCloseModal() {
  const modal = document.querySelector("#modal");
  const burgerButton = document.querySelector("#burger");
  const sidebar = document.querySelector("#sidebar");

  const toggleAllClasses = () => {
    toggleClass(modal, "js-open-modal");
    toggleClass(burgerButton, "js-open-menu");
    toggleClass(sidebar, "js-sidebar-open");

    const isOpenMenu = burgerButton.classList.contains("js-open-menu");
    updateAriaAttributes(isOpenMenu, burgerButton);

    const isOpenSidebar = sidebar.classList.contains("js-sidebar-open");
    updateAriaHidden(!isOpenSidebar, sidebar);
  };

  modal.addEventListener("click", toggleAllClasses);
}
