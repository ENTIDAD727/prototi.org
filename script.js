function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    let convertedAmount;

    // Conversión de moneda
    switch (currency) {
        case 'USD':
            convertedAmount = amount * 3500; // Tasa de cambio USD a COP
            break;
        case 'EU':
            convertedAmount = amount * 4200; // Tasa de cambio EUR a COP
            break;
        case 'BR':
            convertedAmount = amount * 700; // Tasa de cambio BRL a COP
            break;
        default:
            convertedAmount = 0;
    }

    document.getElementById('result').innerText = `La cantidad convertida es: ${convertedAmount} COP`;
}
