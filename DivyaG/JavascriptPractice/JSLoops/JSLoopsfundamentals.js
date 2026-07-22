//https://sqatools.in/javascript-loop/
//Print 1 to 10 numbers using for loop

for(var i=0;i<=10;i++){
    console.log(i)
}

//Reverse value with for loop
for(var i=10;i>=0;i--){
    console.log(i)
}

//table of given value using for loop
var num=10
for(var i=1;i<=10;i++)
    {
    console.log(i, "*", num, ":", i*num)
    }

//factorial
var num=1;
for(var i=9;i>0;i--)
{
    num*=i
}
console.log(num)

//apply loop on string
var str1="HELLO JS"
for(var val of str1){
    console.log(val)
}

//apply loop on array
var array1=[5,6,7,8]
for(var val of array1){
    console.log(val)
}
//apply in array
var arr1=["Hello" ,"js"]
for(var val of arr1){
    console.log(val)
}