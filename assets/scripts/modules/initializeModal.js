import { toggleClass } from "./toggle.js";
import { updateAriaAttributes, updateAriaHidden } from "./updateLinks.js";

function getElements() {
  const elements = {
    modal: document.querySelector("#modal"),
    burgerButton: document.querySelector("#burger"),
    sidebar: document.querySelector("#sidebar"),
  };

  if (!elements.modal || !elements.burgerButton || !elements.sidebar) return;

  return elements;
}

export const handleToggle = (event) => {
  if (event?.type === "touchstart") event.preventDefault();

  const { modal, burgerButton, sidebar } = getElements();

  [modal, burgerButton, sidebar].forEach((element, index) => {
    const classNames = ["js-open-modal", "js-open-menu", "js-sidebar-open"];
    toggleClass(element, classNames[index]);
  });

  const isOpenMenu = burgerButton.classList.contains("js-open-menu");
  updateAriaAttributes(isOpenMenu, burgerButton);

  const isOpenSidebar = sidebar.classList.contains("js-sidebar-open");
  updateAriaHidden(!isOpenSidebar, sidebar);
};
