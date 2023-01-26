let inputValueElement = document.querySelector(".js-inputValue");
let outputValueElement = document.querySelector(".js-outputValue");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let formElement = document.querySelector(".js-form");

let ratePLN = 1.00;
let rateEUR = 4.68;
let rateUSD = 4.41;
let rateGBP = 5.31;
let rateCHF = 4.74;

formElement.addEventListener("input", () => {
  let amount = +inputValueElement.value;
  let inputCurrency = inputCurrencyElement.value;
  let outputCurrency = outputCurrencyElement.value;

  let submit;

  if (amount < 0) {
    alert("Kwota do przeliczenia musi być nieujemna!")
    outputValueElement.value = `0.00 ${outputCurrency}`;
    return;
  } else {
    switch (true) {
      case inputCurrency === "PLN" && outputCurrency === "PLN":
        submit = amount / ratePLN;
        break;

      case inputCurrency === "PLN" && outputCurrency === "EUR":
        submit = amount / rateEUR;
        break;

      case inputCurrency === "PLN" && outputCurrency === "USD":
        submit = amount / rateUSD;
        break;

      case inputCurrency === "PLN" && outputCurrency === "GBP":
        submit = amount / rateGBP;
        break;

      case inputCurrency === "PLN" && outputCurrency === "CHF":
        submit = amount / rateCHF;
        break;

      case inputCurrency === "EUR" && outputCurrency === "PLN":
        submit = (amount / ratePLN) * rateEUR;
        break;

      case inputCurrency === "EUR" && outputCurrency === "EUR":
        submit = (amount / rateEUR) * rateEUR;
        break;

      case inputCurrency === "EUR" && outputCurrency === "USD":
        submit = (amount / rateUSD) * rateEUR;
        break;

      case inputCurrency === "EUR" && outputCurrency === "GBP":
        submit = (amount / rateGBP) * rateEUR;
        break;

      case inputCurrency === "EUR" && outputCurrency === "CHF":
        submit = (amount / rateCHF) * rateEUR;
        break;

      case inputCurrency === "USD" && outputCurrency === "PLN":
        submit = (amount / ratePLN) * rateUSD;
        break;

      case inputCurrency === "USD" && outputCurrency === "EUR":
        submit = (amount / rateEUR) * rateUSD;
        break;

      case inputCurrency === "USD" && outputCurrency === "USD":
        submit = (amount / rateUSD) * rateUSD;
        break;

      case inputCurrency === "USD" && outputCurrency === "GBP":
        submit = (amount / rateGBP) * rateUSD;
        break;

      case inputCurrency === "USD" && outputCurrency === "CHF":
        submit = (amount / rateCHF) * rateUSD;
        break;

      case inputCurrency === "GBP" && outputCurrency === "PLN":
        submit = (amount / ratePLN) * rateGBP;
        break;

      case inputCurrency === "GBP" && outputCurrency === "EUR":
        submit = (amount / rateEUR) * rateGBP;
        break;

      case inputCurrency === "GBP" && outputCurrency === "USD":
        submit = (amount / rateUSD) * rateGBP;
        break;

      case inputCurrency === "GBP" && outputCurrency === "GBP":
        submit = (amount / rateGBP) * rateGBP;
        break;

      case inputCurrency === "GBP" && outputCurrency === "CHF":
        submit = (amount / rateCHF) * rateGBP;
        break;

      case inputCurrency === "CHF" && outputCurrency === "PLN":
        submit = (amount / ratePLN) * rateCHF;
        break;

      case inputCurrency === "CHF" && outputCurrency === "EUR":
        submit = (amount / rateEUR) * rateCHF;
        break;

      case inputCurrency === "CHF" && outputCurrency === "USD":
        submit = (amount / rateUSD) * rateCHF;
        break;

      case inputCurrency === "CHF" && outputCurrency === "GBP":
        submit = (amount / rateGBP) * rateCHF;
        break;

      case inputCurrency === "CHF" && outputCurrency === "CHF":
        submit = (amount / rateCHF) * rateCHF;
        break;
    }
  }

  outputValueElement.value = `${submit.toFixed(2)} ${outputCurrency}`;
});