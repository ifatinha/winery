import { openMenu } from "./modules/burger.js";
import { initializeCloseModal } from "./modules/modal.js";
import { scrollToTop } from "./modules/scrollToTop.js";
import { initializeProductLinks } from "./modules/productLinkHandler.js";
import { loadProductDetails } from "./modules/productDetails.js";
import {
  handleAddWineToCart,
  renderProducts,
  handleCartItemDeletion,
} from "./modules/cartActions.js";
import { openModalCart } from "./modules/cartModal.js";

window.addEventListener("DOMContentLoaded", () => {
  openMenu();
  initializeCloseModal();
  scrollToTop();
  initializeProductLinks();
  loadProductDetails();
  handleAddWineToCart();
  renderProducts();
  openModalCart();
  handleCartItemDeletion();
});
