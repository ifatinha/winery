import { toggleClass } from "./toggle.js";

export function openModalCart() {
  const btnCart = document.querySelector("#btnCart");
  const cartModal = document.querySelector("#cartModal");

  if (!btnCart || !cartModal) return;

  btnCart.addEventListener("click", () => {
    toggleClass(cartModal, "cart__modal-actived");
    
    const isOpenModal = cartModal.classList.contains("cart__modal-actived");

    if (isOpenModal) {
      cartModal.setAttribute("aria-hidden", false);
    } else {
      cartModal.setAttribute("aria-hidden", true);
    }
  });
}
