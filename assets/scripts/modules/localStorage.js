export function saveListToLocalStorage(key, wine) {
  localStorage.setItem(key, JSON.stringify(wine));
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
