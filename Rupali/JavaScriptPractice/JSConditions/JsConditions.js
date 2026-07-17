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