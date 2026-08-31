//var a = 10
//var c = a+b
//console.log("C output :", c)

function try_catch_exception()
{
    try{
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
try_catch_exception()
    
    