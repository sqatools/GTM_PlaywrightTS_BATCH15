// Variable declaration and their types
// var, let, const

// var variables and their properties
// 1. var can be reassign and redeclare
// 2. var is a keyword
// 3. we can declare var variable without initialization
// 4. var variable is function scoped

var a = 20
console.log("value of a is:", a)

if (true) {
    var a = 30
    console.log("value of a inside if block is:", a)
}
console.log("value of a outside if block is:", a) 