//Q1 write arrow function to check given number is prime or not
var result = (num) => {
    var prime = true;
    for (var i=2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
var N=8
var output =result(N);
    if(output){
        console.log(N," is a prime number")

    }else{
        console.log(N," is not a prime number")
    }

console.log("*****************************");

//Q2 write a arrow function to removed duplicate numbers from string.


console.log("*****************************");

  //Q3 write a arrow program to sum of all even number from 1to 30
var sumAll=() =>{
    var sum=0;
    for (var i=1;i<=30;i++)
    {
        if(i%2==0)
        {
            sum+=i;
        }
    }
    return sum;
}
//var output = sumAll();
console.log("Sum of all even numbers from 1 to 30 is: " + sumAll());
console.log("*****************************");
//Q4 write a arrow function create a calculate add, multi , subtraction, division
var result = (num1,num2,operation) => {
    if(operation=="add"){
        console.log("Addition of two numbers is: " );
        return num1+num2;
    }
    if(operation=="sub"){
        console.log("Subtraction of two numbers is: " );
        return num1-num2;
    }
    if(operation=="multi"){
        console.log("Multiplication of two numbers is: " );
        return num1*num2;
    }
    if(operation=="div"){
        console.log("Division of two numbers is: " );   
        return num1/num2;
    }
    else{
        return "Invalid operation";
    }  
}

console.log(result(10,5,"add"));
console.log(result(10,5,"sub"));    
console.log(result(10,5,"multi"));      
console.log(result(10,5,"CAT"));
console.log(result(10,5,"div")); 
console.log("*****************************");

//Q5 write a arrow function to find sum all value are divisible 3 and 5 between 1 to 100 

var sumDivisibleBy3And5 = () => {
    for(var i=2;i<=100;i++)
    {
        if((i%3==0)&&(i%5==0))
        {
            console.log(i)
        }
    }
}
console.log(sumDivisibleBy3And5());
console.log("*****************************");