export const updateAriaAttributes = (isOpen, button) => {
  button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

export const updateAriaHidden = (isOpen, element) => {
  element.setAttribute("aria-hidden", isOpen);
};
