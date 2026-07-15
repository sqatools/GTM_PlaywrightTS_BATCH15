// 1. Check if a person is eligible to vote based on their age:

var age= 25;

if(age>=18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



// 2. Check if a number is divisible by 7 and 11:

var number= 77;

if(number%7==0 && number%11==0){
    console.log("The number is divisible by both 7 and 11.");
} else {
    console.log("The number is not divisible by both 7 and 11.");
}

//3. if else-if program to check the student grade as per marks received:

var marks= 85;

if(marks>=90){
    console.log("Grade: A");
} else if(marks>=80){
    console.log("Grade: B");
} else if(marks>=70){
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}