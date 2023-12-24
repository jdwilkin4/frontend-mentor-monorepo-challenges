async function fetchQuotes() {
  const res = await fetch("https://api.adviceslip.com/advice");

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  const { id, advice } = data;
  console.log(data);
}

fetchQuotes();
