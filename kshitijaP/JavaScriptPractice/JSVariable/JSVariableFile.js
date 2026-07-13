// 1. Area of Triangle = (Base × Height) / 2
let base = 10;
let height = 5;
let areaTriangle = (base * height) / 2;
console.log("1. Area of Triangle =", areaTriangle);

// 2. Perimeter of Triangle = Side1 + Side2 + Side3
let side1 = 5;
let side2 = 6;
let side3 = 7;
let perimeterTriangle = side1 + side2 + side3;
console.log("2. Perimeter of Triangle =", perimeterTriangle);

// 3. Area of Parallelogram = Base × Height
let pBase = 12;
let pHeight = 8;
let areaParallelogram = pBase * pHeight;
console.log("3. Area of Parallelogram =", areaParallelogram);

// 4. Area of Rhombus = (Diagonal1 × Diagonal2) / 2
let diagonal1 = 10;
let diagonal2 = 8;
let areaRhombus = (diagonal1 * diagonal2) / 2;
console.log("4. Area of Rhombus =", areaRhombus);

// 5. Area of Trapezium = ((Base1 + Base2) × Height) / 2
let base1 = 10;
let base2 = 6;
let trapHeight = 5;
let areaTrapezium = ((base1 + base2) * trapHeight) / 2;
console.log("5. Area of Trapezium =", areaTrapezium);

// 6. Volume of Cylinder = π × Radius² × Height
let radius = 4;
let cylinderHeight = 10;
let volumeCylinder = Math.PI * radius ** 2 * cylinderHeight;
console.log("6. Volume of Cylinder =", volumeCylinder);

// 7. Surface Area of Cylinder = 2 × π × Radius × (Radius + Height)
let surfaceCylinder = 2 * Math.PI * radius * (radius + cylinderHeight);
console.log("7. Surface Area of Cylinder =", surfaceCylinder);

// 8. Volume of Cone = (π × Radius² × Height) / 3
let coneHeight = 9;
let volumeCone = (Math.PI * radius ** 2 * coneHeight) / 3;
console.log("8. Volume of Cone =", volumeCone);

// 9. Volume of Sphere = (4/3) × π × Radius³
let sphereRadius = 5;
let volumeSphere = (4 / 3) * Math.PI * sphereRadius ** 3;
console.log("9. Volume of Sphere =", volumeSphere);

// 10. Surface Area of Sphere = 4 × π × Radius²
let surfaceSphere = 4 * Math.PI * sphereRadius ** 2;
console.log("10. Surface Area of Sphere =", surfaceSphere);

// 11. Speed = Distance / Time
let distance = 120;
let time = 2;
let speed = distance / time;
console.log("11. Speed =", speed);

// 12. Distance = Speed × Time
let speed1 = 60;
let time1 = 3;
let totalDistance = speed1 * time1;
console.log("12. Distance =", totalDistance);

// 13. Time = Distance / Speed
let distance1 = 180;
let speed2 = 60;
let totalTime = distance1 / speed2;
console.log("13. Time =", totalTime);

// 14. Force = Mass × Acceleration
let mass = 20;
let acceleration = 5;
let force = mass * acceleration;
console.log("14. Force =", force);

// 15. Work Done = Force × Distance
let workDistance = 10;
let workDone = force * workDistance;
console.log("15. Work Done =", workDone);

// 16. Power = Work / Time
let work = 500;
let powerTime = 10;
let power = work / powerTime;
console.log("16. Power =", power);

// 17. Kinetic Energy = (1/2) × Mass × Velocity²
let mass1 = 15;
let velocity = 8;
let kineticEnergy = 0.5 * mass1 * velocity ** 2;
console.log("17. Kinetic Energy =", kineticEnergy);

// 18. Potential Energy = Mass × Gravity × Height
let gravity = 9.8;
let objectHeight = 20;
let potentialEnergy = mass1 * gravity * objectHeight;
console.log("18. Potential Energy =", potentialEnergy);

// 19. Momentum = Mass × Velocity
let momentum = mass1 * velocity;
console.log("19. Momentum =", momentum);

// 20. Pressure = Force / Area
let area = 25;
let pressure = force / area;
console.log("20. Pressure =", pressure);

// 21. Density = Mass / Volume
let volume = 10;
let density = mass1 / volume;
console.log("21. Density =", density);

// 22. Simple Interest = (Principal × Rate × Time) / 100
let principal = 10000;
let rate = 5;
let years = 2;
let simpleInterest = (principal * rate * years) / 100;
console.log("22. Simple Interest =", simpleInterest);

// 23. Compound Interest = Principal × (1 + Rate/100)^Time − Principal
let compoundInterest =
  principal * (1 + rate / 100) ** years - principal;
console.log("23. Compound Interest =", compoundInterest);

// 24. Total Amount (SI) = Principal + Simple Interest
let totalAmount = principal + simpleInterest;
console.log("24. Total Amount =", totalAmount);

// 25. Discount Amount = (Price × Discount%) / 100
let price = 2000;
let discount = 10;
let discountAmount = (price * discount) / 100;
console.log("25. Discount Amount =", discountAmount);

// 26. Final Price = Price − Discount
let finalPrice = price - discountAmount;
console.log("26. Final Price =", finalPrice);

// 27. GST Amount = (Price × GST%) / 100
let gst = 18;
let gstAmount = (price * gst) / 100;
console.log("27. GST Amount =", gstAmount);

// 28. Total Bill with GST = Price + GST
let totalBill = price + gstAmount;
console.log("28. Total Bill with GST =", totalBill);

// 29. Profit = Selling Price − Cost Price
let costPrice = 500;
let sellingPrice = 700;
let profit = sellingPrice - costPrice;
console.log("29. Profit =", profit);

// 30. Loss = Cost Price − Selling Price
let costPrice1 = 800;
let sellingPrice1 = 650;
let loss = costPrice1 - sellingPrice1;
console.log("30. Loss =", loss);

// 31. Profit Percentage = (Profit / Cost Price) × 100
let profitPercentage = (profit / costPrice) * 100;
console.log("31. Profit Percentage =", profitPercentage + "%");

// 32. Loss Percentage = (Loss / Cost Price) × 100
let lossPercentage = (loss / costPrice1) * 100;
console.log("32. Loss Percentage =", lossPercentage + "%");

// 33. Percentage = (Obtained / Total) × 100
let obtainedMarks = 450;
let totalMarks = 500;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("33. Percentage =", percentage + "%");

// 34. Average of 5 Numbers = (a+b+c+d+e)/5
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let average = (a + b + c + d + e) / 5;
console.log("34. Average =", average);