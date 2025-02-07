// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
}

// logging the results
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Find total profit
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Find total profit

// Task 2: Function Expression - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    return amount * taxRate;
};

// logged the results
console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`); // Find the Sales Tax
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`);  // Find the Sales Tax
