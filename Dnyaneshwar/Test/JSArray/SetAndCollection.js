var Setvalues= new Set(['ram','sham','rohit','ram','naman','sham'])

console.log(Setvalues)

// add new valur

Setvalues.add('virat')
console.log(Setvalues)


//map()


var arr=[1,2,3,4,5]

var out=arr.map(a=>a**2)
console.log(out)


var arr1=[2,4,6,7,9,0,6]

var out1=arr1.map(a=>a*2)
console.log(out1)


//Reduce() :- this method return combine result of array

var arr2=[1,2,3,4,5] 

var totalsum=arr2.reduce((a,b) =>{return a+b})
console.log(totalsum)


// filter() : filter value from array using filter method

var arr3=[1,2,3,4,5,6,7,8,9]

var even =arr3.filter(num =>num %2==0)

console.log("even number is :",even)

