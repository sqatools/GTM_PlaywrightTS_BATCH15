//print number from 0 to 10

for(var i=0; i<=10; i++)
{
    console.log(i);
}


console.log("----------------------")
//reverse loop

for(var i=10; i>=0;i--){
    console.log(i);
}

//program to print table of given number

var num =5;
for(var i=1; i<=10; i++)
{
    console.log(i, "*", num,":", i*num)

}

// program to print factorial of given number

var fact =1;
for(var i=5; i>0;i--){
    fact *=i;

    //console.log("factorial of number is:", fact);
}
console.log("factorial of number is:", fact);



//Factorial program with prompt sync

const prompt =require('prompt-sync')();
const GivenNum =prompt("Enter your number");
var fact =1;

for(var i=GivenNum; i>0; i--){
    fact *=i;

}

console.log("factorial of given number is:",fact);


// for --- of loop

var str1 ="Hello JS";

for(var val of str1)
{
    console.log(val);
}


var arr1 =[5,7,9,11]
for(var n of arr1)
{
    console.log(n)
}

var s3 =["Hello", "JS"]

for(var a of s3)
{
    console.log(a);
}