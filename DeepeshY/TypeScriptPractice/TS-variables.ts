// var VariableName: datatype = value

var a:number = 10
console.log(a)

var b: string = "Hello, TypeScript!"
console.log(b)


var c:number= 50-a
console.log(c)

var status: boolean= true
var status2: boolean = false

console.log("statys :", status)
console.log("statys :", status2)


var marks:number = 20.56
var deciaml: number= 55.67
console.log(marks, typeof marks) // 20.56 number
console.log("deciaml:", deciaml, typeof deciaml) // deciaml: 55.67 number
console.log("#########################################")
// declare array data type and assign values.

var array1:string[] = ["Hello", "we", "learning", "TypeScript"]
console.log(array1) 
// [ 'Hello', 'we', 'learning', 'TypeScript' ]


// var arr2: number[] = ['a', 5, 6, 7, 8, 2, 23]
// console.log(arr2)
// Type 'string' is not assignable to type 'number'.


var arr3:any = [3, 3.5, 100, 'Hello', ['array1', 'ashish'], {a: 345}]
console.log(arr3)
// [ 3, 3.5, 100, 'Hello', [ 'array1', 'ashish' ], { a: 345 } ]


console.log("#############declAre object data type ################")
// DECLARE OBJECT DATA TYPE
var UserDetails: {name: string, age: number, email: string} = {
    name: "Mohan",
    age: 45,
    email: 'mohan@gmail.com'
}

console.log(UserDetails)
