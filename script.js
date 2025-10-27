console.log("Funcionando");

// obtendo os elementos do formularios.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// capturando o evento de submit  do formulário.
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);
};
