// balance.js
function checkBalance() {
    // Get the entered card number (you might want to validate it)
    const cardNumber = document.getElementById('card-number').value;

    // Hide the form container and show the loading GIF
    document.getElementById('balance-info').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    // Simulate fetching data with a timeout
    setTimeout(() => {
        // For now, we use static data; replace this part with actual data fetching
        const balanceData = {
            amount: '$500',
            cardNumber: '5021119012341234',
            expiry: '12/2026',
            status: 'Active'
        };

        // Update the balance information on the page
        document.getElementById('balance-amount').innerText = balanceData.amount;
        document.getElementById('card-number-display').innerText = balanceData.cardNumber;
        document.getElementById('expiry-date').innerText = balanceData.expiry;
        document.getElementById('status').innerText = balanceData.status;

        // Hide the loading GIF and show the balance info
        document.getElementById('loading').style.display = 'none';
        document.getElementById('balance-info').style.display = 'block';
    }, 2000); // Simulate a 2-second delay for the request
}
