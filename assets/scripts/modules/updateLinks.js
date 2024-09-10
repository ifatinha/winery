export const updateAriaAtributes = (isOpen, button) => {
    button.setAttribute("aria-expanded", true);
    button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};