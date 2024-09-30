import { openMenu } from "./modules/burger.js";
import { initializeCloseModal } from "./modules/modal.js";
import { scrollToTop } from "./modules/scrollToTop.js";
import { initializeProductLinks } from "./modules/productLinkHandler.js";
import { loadProductDetails } from "./modules/productDetails.js";
import {
  handleAddWineToCart,
  handleCartItemDeletion,
  redirectPageCart,
  increaseCartItem,
  decreaseCartItem,
  updateCartItemsInLocalStorage,
  displayModalProducts,
  displayProductsPage,
  removeCartToLocalStorage,
} from "./modules/cartActions.js";
import { openModalCart } from "./modules/cartModal.js";
import { formLoginValidator } from "./modules/validateForm.js";

document.addEventListener("DOMContentLoaded", () => {
  openMenu();
  initializeCloseModal();
  scrollToTop();
  displayModalProducts();
  displayProductsPage();
  initializeProductLinks();
  loadProductDetails();
  handleAddWineToCart();
  openModalCart();
  handleCartItemDeletion();
  formLoginValidator();
  redirectPageCart();
  increaseCartItem();
  decreaseCartItem();
  updateCartItemsInLocalStorage();
  removeCartToLocalStorage();
});
