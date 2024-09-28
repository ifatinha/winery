import { Wine } from "../classes/wine.js";

function createdWine(product) {
  const wine = new Wine({
    idProduct: product.idProduct,
    imageSource: product.imageSource,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  });

  return wine;
}

export function saveListToLocalStorage(wine) {
  localStorage.setItem(wine.idProduct, JSON.stringify(wine));
}

export function updateQuantityProduct(list) {
  console.log(list);
}

export function loadListFromLocalStorage() {
  let wines = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = localStorage.getItem(key);

    try {
      wines.push(createdWine(JSON.parse(item)));
    } catch (e) {
      console.error(`Item com a chave '${key}' não é um json válid.`);
    }
  }

  return wines;
}

export function removeItemLocalStore(key) {
  localStorage.removeItem(key);
}
