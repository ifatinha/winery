function updateProductDetails(
  productKey,
  imageSrc,
  productTitle,
  productPrice
) {
  const elements = {
    imgElement: document.querySelector("#product-image"),
    titleElement: document.querySelector("#product-title"),
    priceElement: document.querySelector("#product-price"),
    productElement: document.querySelector("#product-details"),
  };

  if (elements.imgElement) elements.imgElement.src = imageSrc;
  if (elements.titleElement) elements.titleElement.innerText = productTitle;
  if (elements.priceElement) elements.priceElement.innerText = productPrice;
  if (elements.productElement)
    elements.productElement.dataset.productKey = productKey;
}

export function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);

  const image = urlParams.get("image")
    ? decodeURIComponent(urlParams.get("image"))
    : "";

  const title = urlParams.get("title")
    ? decodeURIComponent(urlParams.get("title"))
    : "";

  const price = urlParams.get("price")
    ? decodeURIComponent(urlParams.get("price"))
    : "";

  const productKey = urlParams.get("productKey")
    ? decodeURIComponent(urlParams.get("productKey"))
    : "";

  updateProductDetails(productKey, image, title, price);
}
