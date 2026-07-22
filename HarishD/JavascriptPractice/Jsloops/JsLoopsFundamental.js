//Loops : when we want to execute a certain condition  "n" number times then we can use loops

//for loop
for (var i = 0; i <= 10; i++) {
    console.log("value of i is :", i)
}
console.log("#######################")

for (var i = 10; i >= 0; i--) {
    console.log("value of i is :", i)
}

var num = 4
for (var i = 1; i <= 10; i++) {
    console.log(num, " * ", i, "=", num * i)
}

console.log("#######################")

console.log("get the factorial of a number")
var fact =1
for (var i = 6; i > 0; i--)

{
       fact*=i   //fact = i*fact    
       /*fact = 6*1=6
	   fact =6*5=30
	   fact=30*4=120
	   fact=120*3=360
	   fact=360*2=720
	   fact=720*1=720   */
    
}
console.log("get the factorial of a number:" ,fact)


console.log("#######################")
const prompt = require("prompt-sync")();
const numA = prompt("enter the values: ");
var fact =1
for (var i = Number(numA); i > 0; i--)    // 

{
       fact*=i   //fact = i*fact    
      
}
console.log("get the factorial of a number:" ,fact)


console.log("#######################")
var str= "Hello World"
for(var word of str )
{
    console.log(word)
}

var arr1=[2, 4,6,8,9]
for(var num of arr1)
{
    console.log(num)
}

var arr2= ["hello", "world"]
for(var a of arr2)
{
    console.log(a)
}
