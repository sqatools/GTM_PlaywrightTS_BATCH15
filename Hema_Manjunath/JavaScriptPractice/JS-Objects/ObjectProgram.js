var obj1={
    'a':300,
    'b':400,
    'c': 500,
    'd':770
}
var maxvalue={}
for(let key in obj1){
    if(obj1[key]>maxvalue){
        maxvalue=obj1[key]
    }
}

console.log(maxvalue)


// Write a Program to calculate the total bill and fruits purchase by customer 
var fruits={
    apple:100,
    banana:50,
    orange:70,
    grapes:200
}
var totalbill=0 
for(let key in fruits){ 
fruits[key]=fruits[key]*2
totalbill+=fruits[key]
}   
console.log(fruits)
console.log(totalbill)