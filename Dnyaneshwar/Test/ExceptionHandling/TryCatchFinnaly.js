function tryCatchFinallt(a,b)
{

    try{
    var c=a+b

    console.log("value of c : ",c)

    var d= a/'hello'
    console.log("value of d ",d)
    console.log("variable of e :",e)

    }
    catch(error){
console.log("name of error : ",error.name)
console.log("error message :",error.message)
console.log("error stack :",error.stack)

    }
    finally{

        var num = 5

        var fact=1

        for(var i=1;i<=num;i++)
        {
            fact=fact*i

        }
        console.log("factorial of number if :",fact)
    }
}

tryCatchFinallt(10,20)