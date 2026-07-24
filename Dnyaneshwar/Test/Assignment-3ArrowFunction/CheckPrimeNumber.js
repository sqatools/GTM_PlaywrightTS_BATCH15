var prime =num =>
{
    for(var i=2;i<num;i++)
    {
        if(num %i==0)
        {
            return false
        }
    }
    return true
}
var num =12
if(prime(num)){
    console.log("given number is prime",num)
}
else{
    console.log("given number is not prime",num)
}