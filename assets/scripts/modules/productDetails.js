function updateProductDetails(imageSrc, productTitle, productPrice) {
  const imgElement = document.querySelector("#product-image");
  const titleElement = document.querySelector("#product-title");
  const priceElement = document.querySelector("#product-price");

  if (imgElement) {
    imgElement.src = imageSrc;
  }

  if (titleElement) {
    titleElement.innerText = productTitle;
  }

  if (priceElement) {
    priceElement.innerText = productPrice;
  }
}

export function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);

  const image = decodeURIComponent(urlParams.get("image"));
  const title = decodeURIComponent(urlParams.get("title"));
  const price = decodeURIComponent(urlParams.get("price"));

  updateProductDetails(image, title, price);
}
