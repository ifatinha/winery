
function redirectToProductDetails(link) {
  const productId = link.dataset.productbtn;
  const productElement = document.querySelector(
    `[data-product='${productId}']`
  );

  if (productElement) {
    const productImage = productElement.querySelector(".product__img img");
    const productTitle = productElement.querySelector(".product__price h2");
    const productPrice = productElement.querySelector(".product__price span");

    const imageSrc = productImage ? productImage.getAttribute("src") : "";
    const titleValue = productTitle ? productTitle.innerText : "";
    const priceValue = productPrice ? productPrice.innerText : "";

    const queryParams = new URLSearchParams({
      image: encodeURIComponent(imageSrc),
      title: encodeURIComponent(titleValue),
      price: encodeURIComponent(priceValue),
    }).toString();

    window.location.href = `details.html?${queryParams}`;
  } else {
    console.error(`Produto não encontrado.`);
  }
}

function setupProductLinks() {
  const productLinks = document.querySelectorAll("[data-productBtn]");

  productLinks.forEach((link) => {
    link.addEventListener("click", () => {
      redirectToProductDetails(link);
    });
  });
}

export function initializeProductLinks() {
  setupProductLinks();
}
