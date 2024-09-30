import { Wine } from "../classes/wine.js";

export function createWineFromDOM() {
  const idProduct = document.querySelector("[data-product-key]");
  const imageSource = document.querySelector("#product-image").src;
  const name = document.querySelector("#product-title").innerText;
  const price = parseFloat(
    document.querySelector("#product-price").innerText.split(" ")[1]
  );
  const quantity = parseInt(document.querySelector("#quantity").value, 10);

  return new Wine({
    idProduct: idProduct.dataset.productKey,
    imageSource: imageSource,
    name: name,
    price: price,
    quantity: quantity,
  });
}

export function buildProductFromCartItem(product) {
  const key = product.getAttribute("id");
  const quantity = document.querySelector(
    `#${key} [data-quantity-input]`
  ).value;
  const imageSource = document.querySelector(
    `#${key} .cart__product-image img`
  ).src;
  const name = document.querySelector(
    `#${key} .cart__product-title`
  ).textContent;
  const price = document.querySelector(
    `#${key} .cart__product-price`
  ).textContent;

  return { key, imageSource, name, price, quantity };
}
