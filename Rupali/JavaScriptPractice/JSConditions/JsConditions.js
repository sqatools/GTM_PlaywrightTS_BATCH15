// if condition
var num = 20;

if(num%2==0){
    console.log(num + " is even number");
}
else{
    console.log(num + " is odd number");
}


console.log("--------------------------------------------------");


// multiple conditions using if else if else
var x=10;
var y=20;
var z=20;

if(x>y && x>z)
{
    console.log(x, " x is greater than y and z");
}
else if(y>x && y>z)
{
    console.log(y, "y is greater than x and z");
}
else
{
    console.log(z, "z is greater than x and y");
}

console.log("--------------------------------------------------");

var a=10;
var b=20;
var c=30;

if(a==b){
    console.log("a is equal to b");
}
if(a==c){
    console.log("a is equal to c");
}
console.log("a is not equal to b");


console.log("--------------------------------------------------");

//Program to check for interview rounds results checking
var round1 = "pass";
var round2 = "pass";
var round3 = "fail";
if(round1=="pass"){
    console.log("Round 1 cleared");
    if(round2=="pass"){
        console.log("Round 2 cleared");
    } else{
        console.log("Round 2 failed");
    }
} else {
        console.log("Round 1 failed");
    }

    