// declaring function
function addition(a:number, b:number):void{
    console.log("addition", a+b)
}

//Provide value
addition(40,50)

//string in value
//addition('Hello', 50)

//function with return type
function factorial(a:number): number{
    var fact = 1
    for(var i=a;i>0;i--){
        fact=fact*i
    }
    return fact
}
var result:number = factorial(5)
console.log(result)

//arrow fun

var outputEven =(a:number) => {
    if(a%2==0){
        console.log("even number")
    }else{
        console.log("odd number")
    }
}
outputEven(45)
