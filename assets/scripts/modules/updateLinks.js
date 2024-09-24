export const updateAriaAttributes = (isOpen, button) => {
  const attributes = {
    "aria-expanded": isOpen ? "true" : "false",
    "aria-label": isOpen ? "Fechar menu" : "Abrir menu",
  };

  Object.entries(attributes).forEach(([key, value]) => {
    button.setAttribute(key, value);
  });
};

export const updateAriaHidden = (isHidden, element) => {
  element.setAttribute("aria-hidden", isHidden);
};
