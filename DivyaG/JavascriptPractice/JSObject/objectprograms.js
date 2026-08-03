//Q1 write a program to get each value from array and store in object
// where is value is key and its square as value.

var Data = [5,6,4,7,8]
var output={}
for(var val of Data)
{
    output[val]=val**2
}
console.log(output)
//{ '4': 16, '5': 25, '6': 36, '7': 49, '8': 64 }

//Write  a program to find max value from object
var objB ={
    'a' : 300,
    'b' : 400,
    'c' : 500,
    'd' :778
}
var output = 0
for(var val in objB){
    
    if(objB[val]>output){
        output=objB[val]
    }
}
console.log(output)
//778