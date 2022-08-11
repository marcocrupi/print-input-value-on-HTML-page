const counterFirst = document.getElementById("counterFirst");
const counterSecond = document.getElementById("counterSecond");
const submit = document.getElementById("submitValue");
const resetV = document.getElementById("resetValue");
const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");

const pressButton = (e) => {
  console.log(e);
  counterFirst.innerHTML = e;
};

const digitInput = (e) => {
  console.log(e);
  counterSecond.innerHTML = e;
};

const reset = () => {
  firstInput.value = 0;
  counterFirst.innerHTML = 0;
  secondInput.value = 0;
  counterSecond.innerHTML = 0;
};

// Stampa il valore durante la digitazione:
secondInput.addEventListener("input", function () {
  digitInput(secondInput.value);
});

// Stampa il valore quando si clicca sul pulsante:
submit.addEventListener("click", function () {
  pressButton(firstInput.value);
});

// Resetta il valore quando si clicca sul pulsante:
resetV.addEventListener("click", reset);
