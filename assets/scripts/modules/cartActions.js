import { Wine } from "../classes/wine.js";
// import { wines } from "./wines.js";

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
    saveListToLocalStorage(wine.name, wine);
    alert("Produto Adicionar ao carrinho");
  });
}

function updateCartQuantity(element, quantity) {
  if (quantity > 0) {
    element.classList.add("js-cart__actived");
    element.innerText = quantity;
  } else {
    element.classList.remove("js-cart__actived");
    element.innerText = "";
  }
}

export function renderProducts() {
  const cartQtdElement = document.querySelector("#cartQtd");
  const wines = loadListFromLocalStorage();
  updateCartQuantity(cartQtdElement, wines.length);
  console.log(wines);
}
