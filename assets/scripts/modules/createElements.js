function createElement({ elementName = "div", classes = "" } = {}) {
  const element = document.createElement(elementName);

  if (classes) {
    element.classList.add(...classes.split(" "));
  }

  return element;
}

export function createCartItem(wine) {
  const li = createElement({
    elementName: "li",
    classes: "cart__list-item",
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
  link.id = "btnRemoveWine";
  li.appendChild(link);

  return li;
}
