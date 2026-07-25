//Q1 write arrow function to check given number is prime or not
//Q2 write a arrow function to removed duplicate numbers from string.
//Q3 write a arrow program to sum of all even number from 1to 30
//Q4 write a arrow function create a calculate add, multi , subtraction, division
//Q5 write a arrow function to find sum all value are divisible 3 and 5 between 1 to 100

//Q1 write arrow function to check given number is prime or not
var PrimeResult = (num) => {
    var prime = true
for(var i=2; i<num; i++) {
    if (num%i == 0) {
        prime=false
        break // it will terminate the loop execution
    }
}

if (prime == true) {
    console.log("This is prime number :", num)
} else {
    console.log("This is not an prime number:", num)
}
}

var Primevalue = PrimeResult(13)

//Q2 write a arrow function to removed duplicate numbers from string.

var removeDuplicate = (str) => {
     var  result = "";

    for (var i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

var output= removeDuplicate("123423457")
console.log("After removing duplicate numbers output is:", output)

//Q3 write a arrow program to sum of all even number from 1to 30
var sumEvenNum=()=>{
var sum=0;

for(var i=1;i<=30;i++){

if(i%2==0){
sum+=i; 
}

}

return sum;
}
var evenSum = sumEvenNum();
console.log("Sum of even numbers from 1 to 30:", evenSum);

// Q4 write a arrow function create a calculate add, multi , subtraction, division

var calculation=(num1,num2)=>{

var add=num1+num2;
console.log("Addition = " + add);
var multi=num1*num2;
console.log("Multiplication = " + multi);
var sub=num1-num2;
console.log("Subtraction = " + sub);
var div=num1/num2; 
console.log("Division = " + div); 

 if (num2 !== 0) {
        console.log("Division = " + (num1 / num2));
    } else {
        console.log("Division by zero is not allowed.");
    }
}

var calculationResult = calculation(10, 5);

//Q5 write a arrow function to find sum all value are divisible 3 and 5 between 1 to 100

var numDivisibleBy3And5=()=>{
    var sum=0;
for(var i=1;i<=100;i++){

if(i%3===0 && i%5===0){
sum+=i; 
}


}
return sum;
}
var resultSum = numDivisibleBy3And5();
console.log("Sum of all the values are divisible by 3 and 5 between 1 to 100:", resultSum);