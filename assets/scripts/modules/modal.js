import { toggleClass } from "./toggle.js";

export function initializeCloseModal() {
    const modal = document.querySelector("#modal");
    const button = document.querySelector("#bugger");
    const sidebar = document.querySelector("#sidebar");

    const toggleAllClasses = () => {
        toggleClass(modal, "js-open-modal");
        toggleClass(button, "js-open-menu");
        toggleClass(sidebar, "js-sidebar-open");
    }

    modal.addEventListener("click", toggleAllClasses);
}