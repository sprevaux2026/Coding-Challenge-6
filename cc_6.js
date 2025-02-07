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

// Task 3: Arrow Function - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = 0;
    if (performanceRating === "Excellent") { // Excellent performance rating if 20% of salary
        bonusPercentage = 0.20;
    } else if (performanceRating === "Good") { // Good performance rating if 10% of salary
        bonusPercentage = 0.10;
    } else if (performanceRating === "Average") { // Average performance rating if 5% of salary
        bonusPercentage = 0.05;
    }
    return salary * bonusPercentage;
};

// logged the results
console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); // Find the bonus for excellent performance
console.log(`Bonus: $${calculateBonus(7000, "Good")}`);      // Find the bonus for good performance
