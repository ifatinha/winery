import { validateEmail } from "./validator.js";

const displayError = (element, message) => {
  element.textContent = message;
  element.classList.add("error");
};

const clearFormErros = (element) => {
  element.textContent = "";
  element.classList.remove("error");
};

export function formLoginValidator() {
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const form = document.querySelector("#formContact");

  if (!email || !emailError || !form) return;

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearFormErros(emailError);
    let formIsValid = true;

    try {
      validateEmail(email.value);
    } catch (error) {
      formIsValid = false;
      displayError(emailError, "Email inválido. Verifique e tente novamente.");
    }

    if (formIsValid) {
      alert("Cadastro concluído! Agradecemos por se juntar a nós!");
      window.location.reload();
    }
  });
}
