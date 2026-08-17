//Program to get each value from array and store in object
//where value is a key and its square is value of object

var a = [1,2,4,5,6]

var ObjSquare ={}
for(var val of a)
{
ObjSquare[val]= val**2
}
console.log(ObjSquare)



// find maximum number from object

var objA= {'a':100, 'b':200, 'c':300}
var max = 0;
for(var val in objA){
    if(objA[val]>max){
        max = objA[val]
    }
}
console.log(max)


//find minimun number from object

var objB ={'a':13, 'b':44, 'c': 23, 'd':43, 'e':12}

var minValue = objB.a
for(var k in objB)
{
     
    if(objB[k]<minValue){
      
        minValue =objB[k]
    }
}
console.log("minimun value is: ", minValue)


// write a program to calculate the total bill as per fruits purchased by customers.
var FruitsInventory = {Apple: 100, Banana: 200, Mango:300, waterMelon: 150, lichhi:500,
     PineApple: 300, Orange: 450 }

var FruitsWithPrice = {Apple: 50, Banana: 30, Mango: 60, waterMelon: 100, lichhi: 150,
     PineApple: 75, Orange: 45 }

var FruitPurchased = {waterMelon: 10, lichhi: 25, Apple: 20, Banana: 50, Mango: 30}



// write a program to calculate total electricity bill as per the unit consumed by user. 
/* per unit charges as below
 if total unit<100 then per unit charges 25
if total unit>=100 and <=300 then per unit charges 50
if total unit>300 per unit charges 100
*/
 var cutomerDetails ={ Rahul: 200, Mohan: 250, Ravi: 300, Rohan: 350, Raghav: 450}
 for(var val in cutomerDetails){
    if(cutomerDetails[val]<100){
        console.log(val, cutomerDetails[val], cutomerDetails[val]*25)
    }   
    else if
        (cutomerDetails[val]>=100 && cutomerDetails[val]<=300){
        console.log(val, cutomerDetails[val], cutomerDetails[val]*50)
    }
    else if (cutomerDetails[val]>300){
        console.log(val, cutomerDetails[val], cutomerDetails[val]*100)
    }   
}

