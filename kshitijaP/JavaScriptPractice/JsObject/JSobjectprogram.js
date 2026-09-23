//write a program to get each valiue from array and stroe in object
//where is value is key and its square as value

var Data=[3,4,5,6,7]
var output={}
for(var  val of Data){
    output[val]=val**2
}
console.log(output)

//write a program to find the max value from object
var obj = { a: 100, b: 200, c: 300, d: 400 };

var max = 0;

for (var key in obj) {
    if (obj[key] > max) {
        max = obj[key];
    }
}

console.log(max);

//find a highest salary form object
const employees = {
    emp1: { name: "John", salary: 55000 },
    emp2: { name: "Alice", salary: 72000 },
    emp3: { name: "David", salary: 68000 }
};
var max=0;
for(var key in employees){
    if(employees[key].salary>max){
      max=employees[key].salary
    }
}
console.log(max);

//count product catgory
const products = {
    p1: { category: "Electronics" },
    p2: { category: "Furniture" },
    p3: { category: "Electronics" },
    p4: { category: "Books" },
    p5: { category: "Books" }
};

let count = {};

for (let key in products) {
    let category = products[key].category;

    if (count[category]) {
        count[category]++;
    } else {
        count[category] = 1;
    }
}

console.log(count);

//write a program to calculte total bill
var fruitPrices = {
    apple: 105,
    banana: 555,
    orange: 208,
    mango: 102,
    pinapple: 50,
    lichi: 20
}

var fruitPurchased = {
    apple: 2,
    banana: 3,
    orange: 1,
    mango: 4
}
var Totalbill=0;
for (var fruit in fruitPurchased) {

    var fruitName = fruit;
    var price = fruitPrices[fruit];
    var quantity = fruitPurchased[fruit];
    var bill = price * quantity;

    console.log(fruitName, price, quantity, bill);
    Totalbill=Totalbill+bill
}
console.log("Total bill:", Totalbill);

//Calclte electicty bill as number of units consumed
//if total unit >100 per unit charges is 25 rupess
//if total unit >=100 and <= 300 per unit cahrges is 50 rupess
//it total unit charges >300 per unit cahrges is 100 rupee
var customerdetails = {
  sumeet: 500,
  pratik: 250,
  kshitija: 350,
  nikhil: 100,
  shraddha: 400
};

for (var customer in customerdetails) {

  var unit = customerdetails[customer];
  var bill = 0;
  var rate = 0;

  if (unit < 100) {
    rate = 25;
  } else if (unit >= 100 && unit <= 300) {
    rate = 50;
  } else {
    rate = 100;
  }

  bill = unit * rate;

  console.log(customer, ":", unit, "units", "Rate:", rate, "Total Bill:", bill);
}
