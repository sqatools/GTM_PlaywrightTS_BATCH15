// Total bill with GST
let costPrice = 100;
let gstPercentage = 18;
let gstAmount = (costPrice * gstPercentage) / 100;
let totalBill = costPrice + gstAmount;
console.log("The total bill with GST is: " + totalBill);