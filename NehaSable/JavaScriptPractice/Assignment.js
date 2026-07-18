var marks= 90

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F i.e student is failed")}

    //if condition : An if statement is used to execute code only when a condition is true.
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}

//if else: Used when you want to handle both true and false cases.
let number = 5;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}



    //nested if: An if statement inside another if statement is called a nested if statement.
let num = 10;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");    

    }
    else{
        console.log("Positive odd number");
    }
}
//program for if number is divisible by 2 or 6
var num=12
if(num%2==0 || num%6==0){
    console.log("The number is divisible by 2 or 6",num)
}
else
{
console.log("The number is not divisible by 2 or 6",num)

}

