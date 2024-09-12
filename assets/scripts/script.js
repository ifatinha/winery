import { openMenu } from "./modules/burger.js"
import { initializeCloseModal } from "./modules/modal.js";
import { scrollFunction } from "./modules/btnScrool.js";

window.addEventListener("DOMContentLoaded", () => {
    openMenu();
    initializeCloseModal();
    scrollFunction();
})