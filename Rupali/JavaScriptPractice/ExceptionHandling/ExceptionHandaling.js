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