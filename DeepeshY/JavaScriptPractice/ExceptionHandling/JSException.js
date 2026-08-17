// Exception Handling in JavaScript
// Excpetion handling in javascript is used to manage runtime errors without stopping the entore program.
/*
Common Errors in JavaScript
Error Type	   Description	                    Example
SyntaxError	   Invalid syntax	                Missing }
ReferenceError	Variable not found	            console.log(x)
TypeError	    Invalid operation on a type	    10.toUpperCase()
RangeError	Value out of range	                new Array(-1)
URIError	Invalid URI	                         decodeURIComponent("%")
EvalError	eval()-related issues (rare)	     throw new EvalError()
AggregateError	Multiple errors combined	     Promise.any() failures
Error	Generic custom error	                  throw new Error()

*/
/*
try {
    code
} catch error() {
   code
}

*/

// var a = 10
// var c = a+b
// console.log("C output :", c)

function try_catch_exception() {
    try {
        var a = 10
        var c = a+b
        console.log("C output :", c)

    }
    catch(error) {
        console.log("Error message :", error.message)
        console.log("name :", error.name)

    }
    console.log("Task completed")
}

//try_catch_exception()

console.log("###################################")
// try-catch-finally.

function tryCatchFinally(a, b) {
    try {
        var c = a + b 
        console.log(c)
        var d = a/'hello'
        console.log("value of d:", d)
        //console.log("variable e :", e) // Reference Error
        //console.log(a.toUpperCase()) // TypeError

        //var arr = new Array(-10) // RangeError: Invalid array length
        //console.log(arr)

        var Nums = [30, 50, 60, 35]
        console.log(Nums)
        var output = 10/0
        console.log(output) // Infinity
    } catch(error) {
        console.log("Error message :", error.message)
        console.log("Error in ", error.name)
        console.log("complete error :", error.stack)
    } finally {
        // Finally block always executes the code, even there is eception or not execpetion. 
        var n = 5
        var fact = 1
        for(var i = n; i>0; i--) {
            fact = fact*i
        }
        console.log(n,":", fact)
    }

}

//tryCatchFinally(10, 20)


console.log("###########################")
// throw custom exception with error messages.

function GetArraySum(arrValues) {
    try{
        var sum = 0
        for(var num of arrValues) {
            console.log(num)
            sum += num
            if (sum >= 20) {
                throw new Error("value can not be more than 20")
            } else  {
                continue
            }
        }

    } catch(error) {
        console.log("error.message:", error.message)
        console.log("Error name :", error.name)

    }
    
}

//GetArraySum([4, 5, 6, 7, 8, 2, 5, 6])
// error.message: value can not be more than 20
// Error name : Error



console.log("#############################")
// Nested exception : when we declare one exception block on another exception block than it is
// called nested exception.

function  nestedExceptionHandling() { 
    try {
        var a = 20
        var b = 60
        var d = 10
        console.log("addition :", a+b)
        var c = 5*d
        console.log("value of c:", c)

        try {
            console.log("we are inner code block")
            var x = 100
            var y = 200
            console.log(x !== y)
            console.log(x !== z)

        } catch(error) {
            console.log("inner exception  :", error.message)
            console.log("inner exception name :", error.name)
        }

    } catch(error) {
        console.log("outer exception  :", error.message)
        console.log("outer exception name :", error.name)
    }


}


nestedExceptionHandling()