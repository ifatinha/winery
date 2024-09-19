import { toggleClass } from "./toggle.js";

export function openModalCart() {
  const btnCart = document.querySelector("#btnCart");
  const cartModal = document.querySelector("#cartModal");

  if (!btnCart || !cartModal) return;

  btnCart.addEventListener("click", () => {
    toggleClass(cartModal, "cart__modal-actived");
  });
}
