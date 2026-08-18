var a:number=10
console.log(a)

var B:string="Hello Harish Deshpande"
console.log(B)

var c:Number =50-a
console.log(c)

var status :boolean=true
console.log(status)
var status1 :boolean=false
console.log(status1)


var marks:number = 20.56
var deciaml: number= 55.67
console.log(marks, typeof marks) // 20.56 number
console.log("deciaml:", deciaml, typeof deciaml) // deciaml: 55.67 number
console.log("#########################################")


var array1:string[] = ["Hello", "we", "learning", "TypeScript"]
console.log(array1) 

// var arr2: number[] = ['a', 5, 6, 7, 8, 2, 23]
// console.log(arr2)
// Type 'string' is not assignable to type 'number'.


var arr3:any = [3, 3.5, 100, 'Hello', ['array1', 'ashish'], {a: 345}]
console.log(arr3)
// [ 3, 3.5, 100, 'Hello', [ 'array1', 'ashish' ], { a: 345 } ]


// DECLARE OBJECT DATA TYPE
var UserDetails: {name: string, age: number, email: string} = {
    name: "Mohan",
    age: 45,
    email: 'mohan@gmail.com'
}

console.log(UserDetails)
