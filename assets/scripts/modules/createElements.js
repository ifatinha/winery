function createElement({ elementName = "div", classes = "" } = {}) {
  const element = document.createElement(elementName);

  if (classes) {
    element.classList.add(...classes.split(" "));
  }

  return element;
}

export function displayModalCartItem(wine) {
  const li = createElement({
    elementName: "li",
    classes: "cart__list-item js-product",
  });

  li.id = wine.code;

  const divInfo = createElement({
    elementName: "div",
    classes: "cart__list-info",
  });

  li.appendChild(divInfo);

  const h3 = createElement({ elementName: "h3", classes: "js-element" });
  h3.innerText = wine.name;
  divInfo.appendChild(h3);

  const p = createElement({ elementName: "p", classes: "js-element" });
  divInfo.appendChild(p);

  const spanQtd = createElement({
    elementName: "span",
    classes: "js-element",
  });
  spanQtd.innerText = `${wine.quantity} x `;
  p.appendChild(spanQtd);

  const spanPrice = createElement({ elementName: "span", classes: "" });
  spanPrice.innerText = `R$ ${wine.price}`;
  p.appendChild(spanPrice);

  const divImage = createElement({
    elementName: "div",
    classes: "cart__list-img",
  });
  li.appendChild(divImage);

  const img = createElement({ elementName: "img", classes: "" });
  img.src = wine.imageSource;
  img.alt = "Wine Bottle";
  divImage.appendChild(img);

  const link = createElement({
    elementName: "a",
    classes: "cart__btn",
  });

  link.innerText = "X";
  link.href = "#";
  link.dataset.productId = wine.code;
  li.appendChild(link);

  return li;
}

export function displayCartItem(wine) {
  const li = createElement({
    elementName: "li",
    classes: "cart__product-card js-product",
  });

  li.id = wine.code;

  const divImage = createElement({
    elementName: "div",
    classes: "cart__product-image",
  });

  const itemImage = createElement({ elementName: "img", classes: "" });
  itemImage.src = wine.imageSource;
  itemImage.alt = "Wine Bottle";
  divImage.appendChild(itemImage);
  li.appendChild(divImage);

  const divProductInfo = createElement({
    elementName: "div",
    classes: "cart__product-info",
  });

  const divProductHeader = createElement({
    elementName: "div",
    classes: "cart__product-header",
  });

  const h2 = createElement({
    elementName: "h2",
    classes: "cart__product-title",
  });

  h2.textContent = wine.name;
  divProductHeader.appendChild(h2);

  const buttonRemove = createElement({
    elementName: "a",
    classes: "cart__remove-item",
  });
  buttonRemove.href = "#";
  buttonRemove.dataset.productId = wine.code;

  const icon = createElement({
    elementName: "i",
    classes: "fa-regular fa-trash-can",
  });

  buttonRemove.appendChild(icon);
  divProductHeader.appendChild(buttonRemove);
  divProductInfo.appendChild(divProductHeader);

  const divProductFooter = createElement({
    elementName: "div",
    classes: "cart__product-footer",
  });

  const divQtdControl = createElement({
    elementName: "div",
    classes: "cart__quantity-control",
  });

  const decreaseQuantityBtn = createElement({
    elementName: "button",
    classes: "btn__control",
  });

  decreaseQuantityBtn.textContent = "-";
  decreaseQuantityBtn.id = "decreaseQuantityBtn";
  decreaseQuantityBtn.type = "button";
  divQtdControl.appendChild(decreaseQuantityBtn);

  const productQuantityInput = createElement({
    elementName: "input",
    classes: "cart__quantity-input",
  });

  productQuantityInput.value = wine.quantity;
  productQuantityInput.id = "productQuantityInput";
  productQuantityInput.type = "text";
  productQuantityInput.name = "productQuantityInput";
  productQuantityInput.setAttribute("aria-label", "Quantidade do produto");
  divQtdControl.appendChild(productQuantityInput);

  divProductFooter.appendChild(divQtdControl);

  const increaseQuantityBtn = createElement({
    elementName: "button",
    classes: "btn__control",
  });

  increaseQuantityBtn.textContent = "+";
  increaseQuantityBtn.id = "increaseQuantityBtn";
  increaseQuantityBtn.type = "button";
  divQtdControl.appendChild(increaseQuantityBtn);

  const priceElement = createElement({
    elementName: "p",
    classes: "cart__product-price",
  });

  priceElement.textContent = wine.price;
  divProductFooter.appendChild(priceElement);

  divProductInfo.appendChild(divProductFooter);

  li.appendChild(divProductInfo);

  return li;
}
