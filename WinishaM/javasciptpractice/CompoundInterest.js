// Compound interest
let principal = 1000;
let rate = 5;
let time = 2;
let compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
console.log("The compound interest is: " + compoundInterest);