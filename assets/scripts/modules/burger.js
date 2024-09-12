import { updateAriaAtributes } from "./updateLinks.js";
import { toggleClass } from "./toggle.js";

export function openMenu() {
    const openButton = document.querySelector("#bugger");
    const modal = document.querySelector("#modal");
    const sidebar = document.querySelector("#sidebar");

    if (!openButton || !modal) return;

    const handleToggle = (event) => {
        if (event?.type === "touchstart") event.preventDefault();

        const isMenuOpen = openButton.classList.contains("js-open-menu");
        updateAriaAtributes(isMenuOpen, openButton);

        toggleClass(openButton, "js-open-menu");
        toggleClass(modal, "js-open-modal");
        toggleClass(sidebar, "js-sidebar-open");
    }

    openButton.addEventListener("click", handleToggle);
    openButton.addEventListener("touchstart", handleToggle, { passive: true });
}