import { displayModalCartItem, displayCartItem } from "./createElements.js";
import {
  saveListToLocalStorage,
  loadListFromLocalStorage,
  removeItemLocalStore,
} from "./localStorage.js";
import { createWineFromDOM } from "./wineBuilder.js";

function updateCartDisplayQuantity(quantity, elementId) {
  const cartQuantityElement = document.querySelector(`#${elementId}`);

  if (!cartQuantityElement) return;

  if (quantity > 0) {
    cartQuantityElement.classList.add("js-cart__actived");
    cartQuantityElement.textContent = quantity;
  } else {
    cartQuantityElement.classList.remove("js-cart__actived");
    cartQuantityElement.textContent = "";
  }
}

function toggleCartEmptyState(isEmpty) {
  const emptyMessage = document.querySelector(".cart__empty");
  const cart = document.querySelector(".cart__visible");

  if (!emptyMessage || !cart) return;

  emptyMessage.classList.toggle("cart__empty", isEmpty);
  emptyMessage.classList.toggle("cart__not-empty", !isEmpty);

  cart.classList.toggle("cart__visible", !isEmpty);
  cart.classList.toggle("cart__hidden", isEmpty);
}

function calculateTotalCartValue() {
  const wines = loadListFromLocalStorage();

  return wines.reduce((total, wine) => total + wine.price * wine.quantity, 0);
}

function updateCartTotalDisplay(elementId) {
  const cartElement = document.querySelector(`#${elementId} strong`);

  if (!cartElement) return;

  const totalValue = calculateTotalCartValue();
  cartElement.textContent = `Total: R$ ${totalValue}`;
}

export function handleAddWineToCart() {
  const buyButton = document.querySelector("#btn-buy");

  if (!buyButton) return;

  buyButton.addEventListener("click", () => {
    const wine = createWineFromDOM();
    saveListToLocalStorage(wine);
    alert("Produto Adicionar ao carrinho");
    window.location.reload();
  });
}

export function displayModalProducts() {
  const wines = loadListFromLocalStorage();
  const cartList = document.querySelector("#cartModalList");

  if (!cartList) return;

  if (wines.length > 0) {
    updateCartDisplayQuantity(wines.length, "cartModalQuantity");

    wines.forEach((wine) => {
      const cartItem = displayModalCartItem(wine);
      cartList.appendChild(cartItem);
    });

    updateCartTotalDisplay("cartModalTotal");
    toggleCartEmptyState(false);
  } else {
    toggleCartEmptyState(true);
  }
}

export function displayProductsPage() {
  const wines = loadListFromLocalStorage();
  const cartList = document.querySelector("#cartListPage");

  if (!cartList) return;

  if (wines.length > 0) {
    
    wines.forEach((wine) => {
      const cartItem = displayCartItem(wine);
      cartList.appendChild(cartItem);
    });

    updateCartTotalDisplay("cartFinalPrice");
    toggleCartEmptyState(false);
  } else {
    console.log("estou aqui.");
    toggleCartEmptyState(true);
  }
}

export function handleCartItemDeletion() {
  const removeButtons = document.querySelectorAll("[data-product-id]");
  const winesList = document.querySelectorAll(".js-product");

  if (!removeButtons || !winesList) return;

  const handleRemoveItem = (index) => {
    const item = winesList[index];

    if (item) {
      const itemId = item.getAttribute("id");
      removeItemLocalStore(itemId);
      item.remove();
      updateCartDisplayQuantity(winesList.length);
      updateCartTotalDisplay();
      alert("Produto removido do carrinho.");
      window.location.reload();
    }
  };

  removeButtons.forEach((link, index) => {
    link.addEventListener("click", () => handleRemoveItem(index));
  });
}

export function redirectPageCart() {
  const buttonRedirect = document.querySelector("#viewCart");

  if (!buttonRedirect) return;

  buttonRedirect.addEventListener("click", () => {
    window.location.href = "../pages/cart.html";
  });
}
