const billTotalInput = document.getElementById("bill-total");
const formElement = document.querySelector(".tip-form");
const tipBtns = document.querySelectorAll(".tip-btn");
const customTipInput = document.getElementById("custom-tip");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipAmountSpanElement = document.getElementById("tip-amount");
const totalAmountSpanElement = document.getElementById("total");
const errorMsgSpanElement = document.querySelector(".error-msg");
const resetBtn = document.getElementById("reset-btn");

let billTotal = 0;
let currentTip = 0;
let numOfPeople = 0;

function getInputValue(input) {
  return Number(input.value);
}

function removeSelectedStyles() {
  tipBtns.forEach((btn) => btn.classList.remove("selected"));
}

function resetErrorStyles() {
  numberOfPeopleInput.classList.remove("error");
  errorMsgSpanElement.style.display = "none";
}

function calculateTipPerPerson() {
  return (billTotal * currentTip) / numOfPeople;
}

function calculateTotalPerPerson() {
  return billTotal / numOfPeople + calculateTipPerPerson();
}

function convertCustomTip(amount) {
  return amount * 0.01;
}

billTotalInput.addEventListener("change", () => {
  billTotal = getInputValue(billTotalInput);
});

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeSelectedStyles();
    btn.classList.add("selected");
    currentTip = getInputValue(btn);
  });
});

customTipInput.addEventListener("change", () => {
  const customTip = getInputValue(customTipInput);
  currentTip = convertCustomTip(customTip);
});

numberOfPeopleInput.addEventListener("change", () => {
  resetErrorStyles();
  numOfPeople = getInputValue(numberOfPeopleInput);

  if (numOfPeople === 0) {
    numberOfPeopleInput.classList.add("error");
    errorMsgSpanElement.style.display = "block";
    resetBtn.disabled = true;
    return;
  }

  resetBtn.disabled = false;

  tipAmountSpanElement.textContent = calculateTipPerPerson().toFixed(2);
  totalAmountSpanElement.textContent = calculateTotalPerPerson().toFixed(2);
});

resetBtn.addEventListener("click", () => {
  billTotalInput.value = "";
  billTotal = 0;
  currentTip = 0;
  removeSelectedStyles();
  numberOfPeopleInput.value = "";
  numOfPeople = 0;
  tipAmountSpanElement.textContent = "0.00";
  totalAmountSpanElement.textContent = "0.00";
  customTipInput.textContent = "";
  resetBtn.disabled = true;
});
