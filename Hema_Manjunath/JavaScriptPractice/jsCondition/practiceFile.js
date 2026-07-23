/*
var vAge=18
if(vAge>=18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}
*/

var num1=47
if(num1%7==0 || num1%11==0){
    console.log(num1 + " is divisible by both 7 and 11.");

}else{
    console.log(num1 + " is not divisible by both 7 and 11.");
}

// Write if condition to check given number is divisible by 7 and 11 , and condition to say divisiable by 7 saparatly and 11 separately 
var num2=65
if(num2%7==0 && num2%11==0){
    console.log(num2 +"Can be divided by 7 and 11")
}else{
    if(num2%7==0){
    console.log(num2 +"Can be divided by 7 not by 11")   
    }
else{
        if(num2%11==0){
    console.log(num2 +"Can be divided by 11 not by 7")  
}else{
    console.log(num2 +"Cannot be divided by 11 and  7")   
    }
}
}

//write a if else-if program to chek the Student grade as per marks received in the exam

var perMarks=36
if(perMarks>=90 && perMarks<=100)
{
    console.log("Grade Marks A")
}
else if(perMarks>=80 && perMarks<90){

    console.log("Grade Marks B")  
    }
    else if(perMarks>=70 && perMarks<80)
    {
console.log("Grade Marks C")  
    }
    else{
        console.log("Grade Marks D")
    }


 