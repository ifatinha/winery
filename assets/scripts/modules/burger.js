import { handleToggle } from "./initializeModal.js";

export function openMenu() {
  const burgerButton = document.querySelector("#burger");
  
  ["click", "touchstart"].forEach((eventType) => {
    burgerButton.addEventListener(eventType, handleToggle);
  });
}
