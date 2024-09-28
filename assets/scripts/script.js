import { openMenu } from "./modules/burger.js";
import { initializeCloseModal } from "./modules/modal.js";
import { scrollToTop } from "./modules/scrollToTop.js";
import { initializeProductLinks } from "./modules/productLinkHandler.js";
import { loadProductDetails } from "./modules/productDetails.js";
import {
  handleAddWineToCart,
  displayModalProducts,
  displayProductsPage,
  handleCartItemDeletion,
  redirectPageCart,
  increaseCartItem,
  decreaseCartItem,
} from "./modules/cartActions.js";
import { openModalCart } from "./modules/cartModal.js";
import { formLoginValidator } from "./modules/validateForm.js";

window.addEventListener("DOMContentLoaded", () => {
  openMenu();
  initializeCloseModal();
  scrollToTop();
  initializeProductLinks();
  loadProductDetails();
  handleAddWineToCart();
  displayModalProducts();
  displayProductsPage();
  openModalCart();
  handleCartItemDeletion();
  formLoginValidator();
  redirectPageCart();
  increaseCartItem();
  decreaseCartItem();
});
