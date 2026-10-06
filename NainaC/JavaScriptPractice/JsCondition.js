var a = 17;
if(a%2 ==0){
    console.log("Even no:", a)
} else {
    console.log("odd no:", a)
}


var a= 30
var b=20
var c= 30
if (a==c) {
    console.log(" a and c has equal value")
}
if (a==b) {
    console.log(" a and b has equal value")
}


var num =15
if(num %3==0 && num%5==0){
console.log("this no is divisilbe by 3 n 5")
}
else {
    console.log("this no is not divisible by 3 n 5")
}

var numa= 70
if(num %3 ==0 || num%5==0){
    console.log("num is divisible by 3 n 5")
}
else {
    console,log("num is not divisible by 3 n 5")
}

// nested loop
// ternary operator
var num = 10
var result = num%2==0? "even" : "odd"
console.log(result)


var a = 35
var result2= a%5==0 ? "divisible by 5": "not divisible by 5"
console.log(result2)


//For LOOP
for (var i=0; i<=10; i++){
    console.log(i)
}
//reverse 
for(var i =10; i>=0; i--){
console.log(i)
}


//table of given value
for(var i=1;i<=10;i++){
    console.log(i, "*", num, ":", i *num)
}

//factorial
var numa =23
var fact=1
for(var i=numa; i>0;i--){
    fact *=i
}
    console.log(fact)
 