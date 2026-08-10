var num=17

var prime=true

for(var i=2;i<num;i++)
{
    if(num % i==0)
    {
        prime=false
        break
    }
}

if(prime)
{
    console.log("given number is prime")
}
else{
    console.log("number is not prime",num)
}