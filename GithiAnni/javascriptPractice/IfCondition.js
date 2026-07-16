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

//if else if else: Used when you have multiple conditions to check.
let marks = 85; 
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
}   
else
    {
        console.log("not written the exam");
    }

    //nested if: An if statement inside another if statement is called a nested if statement.
let num = 10;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");    

    }
}