{
  const inputValueElement = document.querySelector(".js-inputValue");
  const getRatio = (currency) => {
    switch (currency) {
      case "PLN":
        return 1.0;
      case "EUR":
        return 4.68;
      case "USD":
        return 4.41;
      case "GBP":
        return 5.31;
      case "CHF":
        return 4.74;
    }
  };

  const calculateResult = (
    inputCurrencyElement,
    outputCurrencyElement,
    amount
  ) => {
    const inputCurrency = inputCurrencyElement.value;
    const outputCurrency = outputCurrencyElement.value;
    return (getRatio(inputCurrency) * amount) / getRatio(outputCurrency);
  };

  const updateResultText = (
    outputValueElement,
    inputCurrencyElement,
    outputCurrencyElement,
    amount,
    outputCurrency
  ) => {
    if (amount < 0) {
      inputValueElement.classList.add("form__field--validAmount");
      outputValueElement.value = `Wprowadzono błędną wartość!`;
      return;
    } else {
      inputValueElement.classList.remove("form__field--validAmount");
      outputValueElement.value = `${calculateResult(
        inputCurrencyElement,
        outputCurrencyElement,
        amount
      ).toFixed(2)} ${outputCurrency}`;
    }
  };

  const onFormChange = () => {
    const inputValueElement = document.querySelector(".js-inputValue");
    const outputValueElement = document.querySelector(".js-outputValue");
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const outputCurrencyElement = document.querySelector(".js-outputCurrency");
    const amount = inputValueElement.value;
    const outputCurrency = outputCurrencyElement.value;

    updateResultText(
      outputValueElement,
      inputCurrencyElement,
      outputCurrencyElement,
      amount,
      outputCurrency
    );
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("input", () => {
      onFormChange();
    });
  };

  init();
}
