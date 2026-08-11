// var VariableName: datatype = value

var a:number = 10
console.log(a)

var b:string = "Hello, TypeScript!"
console.log(b)

var c:number = 50-a
console.log(c)

var status:boolean = true
var status2:boolean = false
console.log(status)
console.log(status2)

var marks:number = 20.56
var decimal:number = 55.67
console.log(marks, typeof(marks))//20.56 number
console.log(decimal, typeof(decimal))//55.67 number

// Declare array data type and assign a value
var arr1:string[] = ['Hello', 'we', 'are','learning','TypeScript']
console.log(arr1)//[ 'Hello', 'we', 'are', 'learning', 'TypeScript' ]

/* var arr2:number[] = [1, 'a', 2, 3, 4]
console.log(arr2)//Type 'string' is not assignable to type 'number'. */

var arr3:any = [3,3.5,100,['ashish','kumar'],"Hello",{a:45}]
console.log(arr3)//[ 3, 3.5, 100, [ 'ashish', 'kumar' ], 'Hello', { a: 45 } ]

//Declare object data type
var userDetails:{name:string, age:number, email:string} =
{
    name:'Mohan',
    age:40,
    email:'mohan@yopmail.com'
}
console.log(userDetails)//{ name: 'Mohan', age: 40, email: 'mohan@yopmail.com' }