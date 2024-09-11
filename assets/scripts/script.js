import { openMenu } from "./modules/burger.js"
import { initializeCloseModal } from "./modules/modal.js";

window.addEventListener("DOMContentLoaded", () => {
    openMenu();
    initializeCloseModal();
})