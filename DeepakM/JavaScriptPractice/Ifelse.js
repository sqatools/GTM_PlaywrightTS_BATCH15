console.log("#######Check whether a number is a three-digit number###########")

var num = 9990;
if(num>99 && num<=999){
    console.log("Number is three digit number:", num)
}
else{
    console.log("Number is not three digit num:", num)
}

console.log("#########Check whether a number is a four-digit number############")
var num1 = 99

if (num1>999 && num1<=9999){
    console.log("Number is four digit number:", num1)
}
else{
    console.log("Number is not four digit number:", num1)
}


console.log("Check whether a number is positive and even")
var num2 = 37
if (num2%2==0 && num2>0) {

    console.log("Number is even and positive:", num2)
    
} else {
     console.log("Number is not even and positive:", num2)
    
    
}

console.log("Check whether a person can enter a movie age >= 18 and has a ticket")
var Age = 12
if (Age>=18) {

    console.log("Person age is Valid for Ticket")
    
} else {
    console.log("Person age not is Valid for Ticket")
    
}