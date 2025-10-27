console.log("Funcionando");

const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// obtendo os elementos do formularios.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// capturando o evento de submit  do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
    default:
      break;
  }
};

//função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`;

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // remove a classe do footer ocultando ele da tela.
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}
