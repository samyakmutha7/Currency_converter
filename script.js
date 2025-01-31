function convert() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = document.getElementById("amount").value;

    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[to];
            const result = amount * rate;
            document.getElementById("result").innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        })
}
