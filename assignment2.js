
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: ", function (billInput) {
    const subtotal = Number(billInput);

    rl.question("Enter tip percentage: ", function (tipInput) {
        const tipPercentage = Number(tipInput);

        const calculatedTip = subtotal * tipPercentage / 100;

        let totalAmount = subtotal;
        totalAmount += calculatedTip;

        console.log(`Subtotal: $${subtotal}`);
        console.log(`Tip Percentage: ${tipPercentage}%`);
        console.log(`Calculated Tip: $${calculatedTip}`);
        console.log(`Total Amount to Pay: $${totalAmount}`);

        rl.close();
    });
});