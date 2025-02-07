// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
}

// logging the results
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Find total profit
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Find total profit

