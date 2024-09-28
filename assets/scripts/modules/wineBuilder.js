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
