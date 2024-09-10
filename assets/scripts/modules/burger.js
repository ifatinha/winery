import { updateAriaAtributes } from "./updateLinks.js";

export function openMenu() {
    const openButton = document.querySelector("#bugger");

    if (!openButton) return;

    const toggleClass = (element, className) => {
        element.classList.toggle(className);
    }

    const toggle = (event) => {
        if (event?.type === "touchstart") event.preventDefault();

        toggleClass(openButton, "menu-open");
        const isOpen = openButton.classList.contains("menu-open");
        updateAriaAtributes(isOpen, openButton);
    }

    openButton.addEventListener("click", toggle);
    openButton.addEventListener("touchstart", toggle);
}