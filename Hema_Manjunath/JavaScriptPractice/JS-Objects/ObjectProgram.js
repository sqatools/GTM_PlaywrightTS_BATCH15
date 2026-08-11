var obj1={
    'a':300,
    'b':400,
    'c': 500,
    'd':770
}
var maxvalue={}
for(let key in obj1){
    if(obj1[key]>maxvalue){
        maxvalue=obj1[key]
    }
}

console.log(maxvalue)


// Write a Program to calculate the total bill and fruits purchase by customer 
var fruits={
    apple:100,
    banana:50,
    orange:70,
    grapes:200
}
var totalbill=0 
for(let key in fruits){ 
fruits[key]=fruits[key]*2
totalbill+=fruits[key]
}   
console.log(fruits)
console.log(totalbill)

//write a program to calculate the total eletricity bill as number of units consumed by customer
var electricitybill={
    unit1:100,
    unit2:200,
    unit3:300,
    unit4:400
}
var totalbill=0
for(let key in electricitybill){
    electricitybill[key]=electricitybill[key]*2
    totalbill+=electricitybill[key]
}   
console.log(electricitybill)
console.log(totalbill)

console.log("*******************************************")

const employees = {
    emp1: { name: "John", salary: 55000 },
    emp2: { name: "Alice", salary: 72000 },
    emp3: { name: "David", salary: 90000 }
};

let highestpaid = 0
let highestperson = ""

for (let data in employees){
    if(employees[data].salary > highestpaid){
        highestpaid = employees[data].salary
        highestPaidEmployee = employees[data].name;
    }
    
}
console.log("Highest Paid Employee:", highestPaidEmployee);
console.log("Salary:", highestSalary);

console.log("*********************************************")
const employees = {
    emp1: { name: "John", salary: 55000 },
    emp2: { name: "Alice", salary: 72000 },
    emp3: { name: "David", salary: 90000 }
};

let highestSalary = 0;
let highestPaidEmployee = "";

for (let emp in employees) {
    if (employees[emp].salary > highestSalary) {
        highestSalary = employees[emp].salary;
        highestPaidEmployee = employees[emp].name;
    }
}

console.log("Highest Paid Employee:", highestPaidEmployee);
console.log("Salary:", highestSalary);