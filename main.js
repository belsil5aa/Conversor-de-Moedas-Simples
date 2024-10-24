document.getElementById('currency-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const rates = {
        'USD': { 'USD': 1, 'EUR': 0.85, 'BRL': 5.30 },
        'EUR': { 'USD': 1.18, 'EUR': 1, 'BRL': 6.24 },
        'BRL': { 'USD': 0.19, 'EUR': 0.16, 'BRL': 1 }
    };

    if (fromCurrency !== toCurrency) {
        const convertedAmount = amount * rates[fromCurrency][toCurrency];
        document.getElementById('result').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = 'As moedas de origem e destino não podem ser iguais.';
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('currency-form').reset();
    document.getElementById('result').innerText = '';
});
