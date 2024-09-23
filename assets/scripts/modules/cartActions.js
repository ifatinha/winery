import { Wine } from "../classes/wine.js";
import { createCartItem } from "./createElements.js";

import {
  saveListToLocalStorage,
  loadListFromLocalStorage,
  removeItemLocalStore,
} from "./localStorage.js";

function buildWine() {
  const image = document.querySelector("#product-image").src;
  const name = document.querySelector("#product-title").innerText;
  const price = parseFloat(
    document.querySelector("#product-price").innerText.split(" ")[1]
  );
  const quantity = parseInt(document.querySelector("#quantity").value, 10);

  return new Wine({
    imageSource: image,
    name: name,
    price: price,
    quantity: quantity,
  });
}

export function addWineToCart() {
  const buttonBuy = document.querySelector("#btn-buy");

  if (!buttonBuy) {
    return;
  }

  buttonBuy.addEventListener("click", () => {
    const wine = buildWine();
    saveListToLocalStorage(wine);
    alert("Produto Adicionar ao carrinho");
  });
}

function updateCartQuantity(quantity) {
  const cartQtdElement = document.querySelector("#cartQtd");

  if (cartQtdElement) {
    if (quantity > 0) {
      cartQtdElement.classList.add("js-cart__actived");
      cartQtdElement.innerText = quantity;
    } else {
      cartQtdElement.classList.remove("js-cart__actived");
      cartQtdElement.innerText = "";
    }
  }
}

function calculateCartTotal() {
  const wines = loadListFromLocalStorage();
  return wines.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function renderTotalProducts() {
  const cartElement = document.querySelector("#cartTotal strong");
  cartElement.textContent = `Total: R$ ${calculateCartTotal()}`;
}

function cartEmpty(isEmpty) {
  const message = document.querySelector(".cart__empty");
  const cart = document.querySelector(".cart__visible");

  if (message) {
    message.classList.toggle("cart__empty", isEmpty);
    message.classList.toggle("cart__not-empty", !isEmpty);
  }

  if (cart) {
    cart.classList.toggle("cart__visible", !isEmpty);
    cart.classList.toggle("cart__hidden", isEmpty);
  }
}

export function renderProducts() {
  const wines = loadListFromLocalStorage();

  if (wines.length > 0) {
    const cartList = document.querySelector("#cartList");
    updateCartQuantity(wines.length);

    wines.forEach((wine) => {
      const li = createCartItem(wine);
      cartList.appendChild(li);
    });

    renderTotalProducts();
    cartEmpty(false);
  } else {
    cartEmpty(true);
  }
}

export function deleteCartItem() {
  const links = document.querySelectorAll("#btnRemoveWine");
  const items = document.querySelectorAll(".cart__list-item");

  if (links.length === 0 || items.length === 0) return;

  const handleRemoveItem = (index) => {
    const item = items[index];

    if (item) {
      const key = item.getAttribute("id");
      console.log(item);
      removeItemLocalStore(key);
      item.remove();
      updateCartQuantity(items.length);
      renderTotalProducts();
      window.location.reload();
    }
  };

  links.forEach((link, index) => {
    link.addEventListener("click", () => handleRemoveItem(index));
  });
}
