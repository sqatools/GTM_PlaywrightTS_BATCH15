var a: number=10
console.log(a)
var b:string="Hello"
console.log(b)
var c: number =50-a
console.log(c)

//array declaration
var arr1:string[]=["hello", "Javascript","Typescript"]
console.log(arr1)


// array with mix values

var arr2: any =[3,3,5,1000,"hello",{a:12,b:34},[2,4,5]]

console.log(arr2)


// object declaration
var userDetails:{name:string, age:number,email:string} ={ name: "rahul", age:34, email:"rahul@gmail.com"}
console.log(userDetails)

// function declaration
function addition(a:number, b:number){
    console.log("addition:", a+b)
}
addition(12,20)

// function with return type
function factorial(num:number):number{
    var fact =1
    for(var i=num; i>0;i--){
        fact*=i
    }
    return fact
}
var result :number = factorial(5)
console.log("factorial is:", result)

//Arrow function with return type

var outputEven =(a:number)=> {
    if(a%2==0){
        console.log("this is even number:",a)
    }
    else{
        console.log("this is odd number:", a)
    }
}
outputEven(23)