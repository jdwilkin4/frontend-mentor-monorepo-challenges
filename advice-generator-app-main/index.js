const diceBtn = document.getElementById("dice-btn");
const quoteId = document.getElementById("quote-id");
const quote = document.getElementById("quote");

async function fetchQuotes() {
  const res = await fetch("https://api.adviceslip.com/advice");

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  const { id, advice } = data.slip;

  quoteId.textContent = id;
  quote.textContent = `"${advice}"`;
}

diceBtn.addEventListener("click", fetchQuotes);
