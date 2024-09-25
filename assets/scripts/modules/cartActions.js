import { Wine } from "../classes/wine.js";
import { createCartItem } from "./createElements.js";
import {
  saveListToLocalStorage,
  loadListFromLocalStorage,
  removeItemLocalStore,
} from "./localStorage.js";
import { createWineFromDOM } from "./wineBuilder.js";

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

function updateCartDisplayQuantity(quantity) {
  const cartQuantityElement = document.querySelector("#cartQuantity");

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

export function renderProducts() {
  const wines = loadListFromLocalStorage();
  const cartList = document.querySelector("#cartList");

  if (!cartList) return;

  if (wines.length > 0) {
    updateCartDisplayQuantity(wines.length);

    wines.forEach((wine) => {
      const cartItem = createCartItem(wine);
      cartList.appendChild(cartItem);
    });

    updateCartTotalDisplay();
    toggleCartEmptyState(false);
  } else {
    toggleCartEmptyState(true);
  }
}

function calculateTotalCartValue() {
  const wines = loadListFromLocalStorage();

  return wines.reduce((total, wine) => total + wine.price * wine.quantity, 0);
}

function updateCartTotalDisplay() {
  const cartElement = document.querySelector("#cartTotal strong");

  if (!cartElement) return;

  const totalValue = calculateTotalCartValue();
  cartElement.textContent = `Total: R$ ${totalValue}`;
}

export function handleCartItemDeletion() {
  const removeButtons = document.querySelectorAll("[data-remove-wine]");
  const winesList = document.querySelectorAll(".cart__list-item");

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
