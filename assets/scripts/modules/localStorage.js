function getId() {
  return `item_${Math.random().toString(36).substring(2, 9)}`;
}

export function saveListToLocalStorage(wine) {
  const key = getId();
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
