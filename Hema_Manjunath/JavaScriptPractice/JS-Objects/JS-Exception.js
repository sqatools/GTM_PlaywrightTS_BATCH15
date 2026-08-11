 // Syntax
 /* try {
    
} catch (error) {
    
}
*/


 function try_catch_error(){
    try {
        var a = 10;
        var c= a+b
        console.log("Output:", c)
    } catch (error) {
        console.log("Error Message:" ,error.message)
        console.log("Error Name :" , error.name)
    }
 }
 try_catch_error()


console.log("*******************************************")

function trycatchfunction(a,b){
try {
    var c=a+b
    console.log(c)
    var d=a/'hello'
    console.log("value of d", d)
    //    console.log("value of e", e)
    console.log(a.touppercase())
} catch (error) {
    console.log("ErrorMessage:" , error.message)
    console.log("ErrorName:" , error.name)
}
finally{
    varn=5
    var fact=1
    for (var i=0;i>=10 ; i--){
        fact=fact*i
    }
    console.log(fact)
}
}

trycatchfunction(10,30)

//common error types in javascript
//1. ReferenceError
//2. TypeError
//3. SyntaxError
//4. RangeError
//5. EvalError
//6. URIError
//7. InternalError
//8. AggregateError
//9. Error
//10. CustomError
// 11. AssertionError