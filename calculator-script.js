const interestRates = {
  Binance: { USD: 5, AUD: 6, GBP: 3, EUR: 2, JPY: 1 },
  Kraken: { USD: 4, AUD: 5, GBP: 6, EUR: 7, JPY: 8 },
  Gemini: { USD: 9, AUD: 8, GBP: 7, EUR: 6, JPY: 5 },
  "Crypto.com": { USD: 2, AUD: 3, GBP: 4, EUR: 5, JPY: 6 },
  Coinbase: { USD: 10, AUD: 9, GBP: 8, EUR: 7, JPY: 6 },
};

function displayInterestRate() {
  const exchange = document.getElementById("exchange").value;
  const currency = document.getElementById("currency").value;
  const rate = interestRates[exchange][currency];

  document.getElementById("displayedInterestRate").innerText = ` (${rate}% Interest)`;
}

function calculateInterest() {
  const exchange = document.getElementById("exchange").value;
  const currency = document.getElementById("currency").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const rate = interestRates[exchange][currency];
  const yearlyInterest = amount * (rate / 100);

  document.getElementById("interestRate").innerText = `Interest Rate: ${rate}%`;
  document.getElementById("yearlyInterest").innerText = `Yearly Interest: ${currency} ${yearlyInterest.toFixed(2)}`;

  displayInterestRate();
}
