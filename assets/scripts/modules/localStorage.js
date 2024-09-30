function existingProductToLocalStorage(cart, newProduct) {
  return cart.findIndex(
    (product) => product.idProduct === newProduct.idProduct
  );
}

export function saveListToLocalStorage(newProduct) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = existingProductToLocalStorage(cart, newProduct);
  console.log(existingProductIndex);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity = newProduct.quantity;
  } else {
    cart.push(newProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateProductToLocalStorage(products) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  products.forEach((product) => {
    const productIndex = existingProductToLocalStorage(cart, product);

    if (productIndex !== -1) {
      cart[productIndex] = { ...cart[product], ...product };
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadListFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function removeItemLocalStore(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((product) => product.idProduct !== productId);

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeCart() {
  localStorage.removeItem("cart");
}
