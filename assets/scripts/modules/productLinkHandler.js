function redirectToProductDetails(link) {
  const productId = link.dataset.productAction;
  const productElement = document.querySelector(
    `[data-product-key='${productId}']`
  );

  if (!productElement) {
    console.error(`Produto não encontrado.`);
    return;
  }

  const productImage = productElement.querySelector(".product__item-img img");
  const productTitle = productElement.querySelector(".product__item-price h2");
  const productPrice = productElement.querySelector(".product__item-price span");

  const imageSrc = productImage ? productImage.getAttribute("src") : "";
  const titleValue = productTitle ? productTitle.innerText : "";
  const priceValue = productPrice ? productPrice.innerText : "";

  const queryParams = new URLSearchParams({
    productKey: encodeURIComponent(productId),
    image: encodeURIComponent(imageSrc),
    title: encodeURIComponent(titleValue),
    price: encodeURIComponent(priceValue),
  }).toString();

  window.location.href = `details.html?${queryParams}`;
}

function setupProductLinks() {
  const productLinks = document.querySelectorAll("[data-product-action]");

  productLinks.forEach((link) => {
    link.addEventListener("click", () => {
      redirectToProductDetails(link);
    });
  });
}

export function initializeProductLinks() {
  setupProductLinks();
}
