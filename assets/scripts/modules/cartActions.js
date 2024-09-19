import { Wine } from "../classes/wine.js";
import { createCartItem } from "./createElements.js";

import {
  saveListToLocalStorage,
  loadListFromLocalStorage,
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
    console.log("Adicionar vinho ao carrinho.");
    const wine = buildWine();
    saveListToLocalStorage(wine);
    alert("Produto Adicionar ao carrinho");
  });
}

function updateCartQuantity(element, quantity) {
  if (element) {
    if (quantity > 0) {
      element.classList.add("js-cart__actived");
      element.innerText = quantity;
    } else {
      element.classList.remove("js-cart__actived");
      element.innerText = "";
    }
  }
}

export function renderProducts() {
  const cartQtdElement = document.querySelector("#cartQtd");
  const wines = loadListFromLocalStorage();

  if (wines.length > 0) {
    const cartList = document.querySelector("#cartList");
    updateCartQuantity(cartQtdElement, wines.length);

    wines.forEach((wine, index) => {
      const li = createCartItem(wine, index);
      cartList.appendChild(li);
    });
  }
}

export function deleteCartItem() {
  const links = document.querySelectorAll("#btnRemoveWine");
  const itens = document.querySelectorAll(".cart__list-item");

  if (!links || !itens) return;

  const handleRemoveItem = (link, index) => {
    const item = itens[index];
    console.log(item);
  };

  links.forEach((link, index) => {
    link.addEventListener("click", () => handleRemoveItem(link, index));
  });
}
