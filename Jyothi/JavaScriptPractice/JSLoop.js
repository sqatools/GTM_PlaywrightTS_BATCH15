//For Loop

for(var i=0;i<=10;i++)

{
    console.log(i)
}

//Apply for loop with reverse values

for(var i=10;i>=1;i--)
{
    console.log(i)

}

//table of given value
var n4=3
for(i=1;i<=5;i++)
{
   console.log(i,"*",n4 ,":",i*n4)
}


//Get factorial of given values

var fact=1
for(var i=5;i>=1;i--)
{
    fact*=i
}
console.log("factorial output",fact)

//const prompt=require('prompt-sync')()
//const name=prompt("enter ur number:")
//var fact1=1
//for(var i=Number(numa);i>0;i--)
//{
   // fact*=i
//}
//console.log("factorial output",fact1)


//Apply loop on string datatype
var string1="Hello JS"
for(var val of string1)
{console.log(val)

}

var array1=[5,7,8]
for(var n of array1)
    {
        console.log(n)

    }

var array2=[30,4.5,[6,7,8],{a:9,b:16}]
for(var s of array2[2])
    {
        console.log(s)

    }

   //Find largest of an array

   var array=[20,15,50,3]
   var max=array[0]
   for(var i=0;i<array.length;i++)
    if(array[i]>max)
    {
        max=array[i]
    }
console.log(max)

//Find small number of an array
var arr=[20,15,50,3]
   var min=arr[0]
   for(var i=0;i<arr.length;i++)
    if(arr[i]<min)
    {
        min=arr[i]
    }
console.log(min)

//count array elements

var arr1=[23,3,4,5,6]
count=0
for(var i=0;i<arr1.length;i++)
{
    count++
}
console.log("count:",count)


//Find second largest number

var arr = [23, 4, 34, 31, 6, 7];

var largest = arr[0];
var secondLargest = arr[0];

for (var i = 1; i < arr.length; i++) 
    {
    if (arr[i] > largest) 
        {
        secondLargest = largest;
        largest = arr[i];
         } else if (arr[i] > secondLargest) 
            {
               secondLargest = arr[i];
             }
     }

console.log("Second Largest:", secondLargest);
console.log("Largest:", largest);



//Reversea string

var str = "Hello";
var reverse = "";

for (var i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
}

//Check polindrome


var str = "madam"
var reverse = ""

for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
}

if (str == reverse) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}


//Prime number

for(var num=1;num<=100;num++)
{
    var prime=true
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
            prime=false
            break
        }
    }
    if(prime)
    {
        console.log("prime number",num)

    }
    else
    {
        console.log("Not prime number",num)

    }
}