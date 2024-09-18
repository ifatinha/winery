import { openMenu } from "./modules/burger.js";
import { initializeCloseModal } from "./modules/modal.js";
import { scrollFunction } from "./modules/buttonScroll.js";
import { initializeProductLinks } from "./modules/productLinkHandler.js";
import { loadProductDetails } from "./modules/productDetails.js";
import { addWineToCart, renderProducts } from "./modules/cartActions.js";

window.addEventListener("DOMContentLoaded", () => {
  openMenu();
  initializeCloseModal();
  scrollFunction();
  initializeProductLinks();
  loadProductDetails();
  addWineToCart();
  renderProducts();
});
