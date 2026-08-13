function addition(a: number, b: number):void {
    console.log("addition :", a+b)
}


// provide required value
addition(40, 50)

// string in typescript
//addition('Hello', 'Good Morning')
// Argument of type 'string' is not assignable to parameter of type 'number'.


//function with return type

function factorials(num:number): number {
    var fact = 1
    for (var i=num; i>0; i--) {
        fact *= i
    }
    return fact
}


var result:number= factorials(5)
console.log("factoarial of 5 :", result)

var output2 = factorials(6)
console.log("factoarial of 6 :", output2)

// arrow function with typescript
var outputEven = (a:number)=> {
    if (a%2 ==0) {
        console.log("this is even number :", a)
    } else {
        console.log("this is odd number :", a)
    }

}

outputEven(45)