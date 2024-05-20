function checkBalance() {
    const cardNumber = document.getElementById('card-number').value;
    document.getElementById('balance-info').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const balanceData = {
            amount: cardNumber,
            cardNumber: '5021119012341234',
            expiry: '12/2026',
            status: 'Active'
        };

        document.getElementById('balance-amount').innerText = balanceData.amount;
        document.getElementById('card-number-display').innerText = balanceData.cardNumber;
        document.getElementById('expiry-date').innerText = balanceData.expiry;
        document.getElementById('status').innerText = balanceData.status;

        document.getElementById('loading').style.display = 'none';
        document.getElementById('balance-info').style.display = 'block';
    }, 2000);
}
