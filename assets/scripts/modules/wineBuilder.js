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
  const idProduct = product.getAttribute("id");
  const imageSource = document.querySelector(
    `#${idProduct} .cart__product-image img`
  ).src;
  const name = document.querySelector(
    `#${idProduct} .cart__product-title`
  ).textContent;
  const price = document.querySelector(
    `#${idProduct} .cart__product-price`
  ).textContent;
  const quantity = document.querySelector(
    `#${idProduct} [data-quantity-input]`
  ).value;

  return new Wine({
    idProduct: idProduct,
    imageSource: imageSource,
    name: name,
    price: price,
    quantity: quantity,
  });
}
