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

// Task 4: Parameters and Arguments - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost = 0;
    if (plan === "Basic") { // Basic plan costs $10 per month
        monthlyCost = 10;
    } else if (plan === "Premium") { // Premium plan costs $20 per month
        monthlyCost = 20;
    } else if (plan === "Enterprise") { // Enterprise plan costs $50 per month
        monthlyCost = 50;
    }
    let totalCost = (monthlyCost * months) - discount;
    return totalCost;
}

// logged the results
console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);   // Find the Total Cost for Basic Plan
console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);  // Find the Total Cost for Premium Plan

// Task 5: Returning Values - Currency Conversion
function convertCurrency(amount, exchangeRate) {
    let converted = amount * exchangeRate;
    return converted;
}

// logged the results to 2 decimal places
console.log(`Converted Amount: $${convertCurrency(100, 1.1).toFixed(2)}`); // Find the Converted Amount
console.log(`Converted Amount: $${convertCurrency(250, 0.85).toFixed(2)}`); // Find the Converted Amount

// Task 6: Higher-Order Functions - Discount Strategy for Bulk Orders
let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

// If an order is above $500, apply a 10% discount
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log("Discounted Orders:", discountedOrders);

// Task 7: Closures - Business Expense Tracker
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) { //Track expenses and return the total expenses
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;
    };
}

let tracker = createExpenseTracker();
console.log(tracker(200)); // Find the Total Expenses
console.log(tracker(150)); // Find the Total Expenses

// Task 8: Recursion in JavaScript - Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) { // Calculate the years to reach Level 10
    if (employeeLevel >= 10) {
        return 0;
    } else {
        return 2 + calculateYearsToPromotion(employeeLevel + 1); 
    }
}

console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`); // Find the years to get to Level 10 starting from Level 7
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`); // Find the years to get to Level 10 starting from Level 5
