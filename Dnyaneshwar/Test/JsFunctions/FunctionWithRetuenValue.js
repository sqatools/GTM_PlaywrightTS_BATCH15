function factorial(num)
{
    var fact =1

    for(var i=num ;i>0 ;i--)
    {
        fact=fact*i
    }
    return fact
}

var factOut=factorial(5)
console.log(factOut)