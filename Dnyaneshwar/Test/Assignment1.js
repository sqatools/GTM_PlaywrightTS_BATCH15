// ==============================
// 1. Area of Triangle
// ==============================
let base1 = 10;
let height1 = 8;
console.log("1. Area of Triangle =", (base1 * height1) / 2);

// 2. Perimeter of Triangle
let side1 = 10;
let side2 = 12;
let side3 = 15;
console.log("2. Perimeter of Triangle =", side1 + side2 + side3);

// 3. Area of Parallelogram
let base2 = 20;
let height2 = 12;
console.log("3. Area of Parallelogram =", base2 * height2);

// 4. Area of Rhombus
let diagonal1 = 16;
let diagonal2 = 10;
console.log("4. Area of Rhombus =", (diagonal1 * diagonal2) / 2);

// 5. Area of Trapezium
let trapBase1 = 10;
let trapBase2 = 20;
let trapHeight = 8;
console.log("5. Area of Trapezium =", ((trapBase1 + trapBase2) * trapHeight) / 2);

// 6. Volume of Cylinder
let radius1 = 5;
let cylHeight = 10;
console.log("6. Volume of Cylinder =", Math.PI * radius1 ** 2 * cylHeight);

// 7. Surface Area of Cylinder
console.log("7. Surface Area of Cylinder =", 2 * Math.PI * radius1 * (radius1 + cylHeight));

// 8. Volume of Cone
let radius2 = 4;
let coneHeight = 9;
console.log("8. Volume of Cone =", (Math.PI * radius2 ** 2 * coneHeight) / 3);

// 9. Volume of Sphere
let radius3 = 7;
console.log("9. Volume of Sphere =", (4 / 3) * Math.PI * radius3 ** 3);

// 10. Surface Area of Sphere
console.log("10. Surface Area of Sphere =", 4 * Math.PI * radius3 ** 2);

// 11. Speed
let distance1 = 200;
let time1 = 4;
console.log("11. Speed =", distance1 / time1);

// 12. Distance
let speed1 = 60;
let time2 = 3;
console.log("12. Distance =", speed1 * time2);

// 13. Time
let distance2 = 180;
let speed2 = 60;
console.log("13. Time =", distance2 / speed2);

// 14. Force
let mass1 = 20;
let acceleration = 5;
console.log("14. Force =", mass1 * acceleration);

// 15. Work Done
let force1 = 100;
let distance3 = 50;
console.log("15. Work Done =", force1 * distance3);

// 16. Power
let work = 500;
let time3 = 10;
console.log("16. Power =", work / time3);

// 17. Kinetic Energy
let mass2 = 10;
let velocity = 8;
console.log("17. Kinetic Energy =", (1 / 2) * mass2 * velocity ** 2);

// 18. Potential Energy
let mass3 = 15;
let gravity = 9.8;
let height3 = 20;
console.log("18. Potential Energy =", mass3 * gravity * height3);

// 19. Momentum
let mass4 = 12;
let velocity2 = 6;
console.log("19. Momentum =", mass4 * velocity2);

// 20. Pressure
let force2 = 300;
let area = 15;
console.log("20. Pressure =", force2 / area);

// 21. Density
let mass5 = 100;
let volume = 25;
console.log("21. Density =", mass5 / volume);

// 22. Simple Interest
let principal1 = 10000;
let rate1 = 5;
let years1 = 2;
let simpleInterest = (principal1 * rate1 * years1) / 100;
console.log("22. Simple Interest =", simpleInterest);

// 23. Compound Interest
let principal2 = 10000;
let rate2 = 10;
let years2 = 2;
let compoundInterest = principal2 * (1 + rate2 / 100) ** years2 - principal2;
console.log("23. Compound Interest =", compoundInterest);

// 24. Total Amount (SI)
console.log("24. Total Amount =", principal1 + simpleInterest);

// 25. Discount Amount
let price1 = 5000;
let discount = 10;
let discountAmount = (price1 * discount) / 100;
console.log("25. Discount Amount =", discountAmount);

// 26. Final Price
console.log("26. Final Price =", price1 - discountAmount);

// 27. GST Amount
let price2 = 1000;
let gst = 18;
let gstAmount = (price2 * gst) / 100;
console.log("27. GST Amount =", gstAmount);

// 28. Total Bill with GST
console.log("28. Total Bill with GST =", price2 + gstAmount);

// 29. Profit
let sellingPrice1 = 1500;
let costPrice1 = 1200;
let profit = sellingPrice1 - costPrice1;
console.log("29. Profit =", profit);

// 30. Loss
let costPrice2 = 1500;
let sellingPrice2 = 1200;
let loss = costPrice2 - sellingPrice2;
console.log("30. Loss =", loss);

// 31. Profit Percentage
console.log("31. Profit Percentage =", (profit / costPrice1) * 100);

// 32. Loss Percentage
console.log("32. Loss Percentage =", (loss / costPrice2) * 100);

// 33. Percentage
let obtainedMarks = 450;
let totalMarks = 500;
console.log("33. Percentage =", (obtainedMarks / totalMarks) * 100);

// 34. Average of 5 Numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;
console.log("34. Average =", (num1 + num2 + num3 + num4 + num5) / 5);