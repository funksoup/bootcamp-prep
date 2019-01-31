// YOUR CODE BELOW

function lastFridayNight(transactions){
    let totalAmt = 0;

    for (let i = 0; i < transactions.length; i++) {
        let oneTransaction = transactions[i];

        totalAmt += oneTransaction.amount;

    }

    return totalAmt;
}