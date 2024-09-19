export function saveListToLocalStorage(wine) {
  localStorage.setItem(wine.code, JSON.stringify(wine));
}

export function loadListFromLocalStorage() {
  let wines = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = localStorage.getItem(key);

    try {
      wines.push(JSON.parse(item));
    } catch (e) {
      console.error(`Item com a chave '${key}' não é um json válid.`);
    }
  }

  return wines;
}

export function removeItemLocalStore(key) {
  localStorage.removeItem(key);
}
