const currencyElOne = document.querySelector('#currency-one');
const currencyElTwo = document.querySelector('#currency-two');
const amountElOne = document.querySelector('#amount-one');
const amountElTwo = document.querySelector('#amount-two');
const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');

async function calculate() {
	const currencyOne = currencyElOne.value;
	const currencyTwo = currencyElTwo.value;

	// API call to get exchange rates.
	const res = await fetch('https://open.exchangerate-api.com/v6/latest');
	const data = await res.json();
	const rate = data.rates[currencyTwo] / data.rates[currencyOne];

	// Change dom text to results
	rateEl.textContent = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
	amountElTwo.value = (amountElOne.value * rate).toFixed(2);
}

// Event Listener
currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
	const temp = currencyElOne.value;
	currencyElOne.value = currencyElTwo.value;
	currencyElTwo.value = temp;
	calculate();
});

calculate();
