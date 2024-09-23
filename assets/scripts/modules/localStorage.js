import { Wine } from "../classes/wine.js";

function createdWine(code, item) {
  const wine = new Wine({
    imageSource: item.imageSource,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  });

  wine.code = code;

  return wine;
}

export function saveListToLocalStorage(wine) {
  localStorage.setItem(wine.code, JSON.stringify(wine));
}

export function loadListFromLocalStorage() {
  let wines = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = localStorage.getItem(key);

    try {
      wines.push(createdWine(key, JSON.parse(item)));
    } catch (e) {
      console.error(`Item com a chave '${key}' não é um json válid.`);
    }
  }

  return wines;
}

export function removeItemLocalStore(key) {
  localStorage.removeItem(key);
}
