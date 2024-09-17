function updateProductDetails(imageSrc, productTitle, productPrice) {
  const imgElement = document.querySelector("#product-image");
  const titleElement = document.querySelector("#product-title");
  const priceElement = document.querySelector("#product-price");

  if (imgElement) {
    imgElement.src = imageSrc;
  } else {
    console.error("Elemento com ID 'product-image' não encontrado.");
  }

  if (titleElement) {
    titleElement.innerText = productTitle;
  } else {
    console.error("Elemento com ID 'product-title' não encontrado.");
  }

  if (priceElement) {
    priceElement.innerText = productPrice;
  } else {
    console.error("Elemento com ID 'product-price' não encontrado.");
  }
}

export function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);

  const image = decodeURIComponent(urlParams.get("image"));
  const title = decodeURIComponent(urlParams.get("title"));
  const price = decodeURIComponent(urlParams.get("price"));

  updateProductDetails(image, title, price);
}
