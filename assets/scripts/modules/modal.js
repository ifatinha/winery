import { handleToggle } from "./initializeModal.js";

export function initializeCloseModal() {
  const modal = document.querySelector("#modal");

  if (!modal) return;

  ["click", "touchstart"].forEach((eventType) => {
    modal.addEventListener(eventType, handleToggle);
  });
}
