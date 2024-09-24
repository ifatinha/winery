import { handleToggle } from "./initializeModal.js";

export function initializeCloseModal() {
  const modal = document.querySelector("#modal");
  
  ["click", "touchstart"].forEach((eventType) => {
    modal.addEventListener(eventType, handleToggle);
  });
}
