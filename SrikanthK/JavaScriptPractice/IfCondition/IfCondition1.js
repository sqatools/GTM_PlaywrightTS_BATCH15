// Q1. Write a  if program  to check  whether a person is eligible to vote or not
// Q2. Write a program to check whether the given number is divisible by  7 and 11
// Q3. Write a program to check the student marks grade

voteage = 17;
if(voteage >= 18){
    console.log("Eligible to vote")
}
else {
    console.log("Not Eligible to vote")
}

number1 = 77;
if(number1 % 7 == 0 && number1 % 11 == 0){
    console.log("Divisible by 7 and 11")
}
else {
    console.log("Not Divisible by 7 and 11")
}

marks = 90
if (marks >= 90 && marks <= 100){
    console.log("Grade A")
}
else if (marks >= 80 && marks < 90){
    console.log("Grade B")
}
else if (marks >= 70 && marks < 80){
    console.log("Grade C")
}   
else if (marks >= 60 && marks < 70){
    console.log("Grade D")
} else if (marks >= 50 && marks < 60){
    console.log("Grade E")
}   else if (marks >= 0 && marks < 50){
    console.log("Grade F")
}