// Arrow Function
var sumResult =(num) => {
    var sum =0
    for (var i =1 ; i <= num; i ++)
    {
        sum+= i
    }
    return sum
}
var sumValue = sumResult (10)
console.log("sum of values :" , sumValue)


// CallBck function
function RepeatString (n, funC)
{
    for (i = 1; i <= n; i++)
    {
        funC()
    }
}
function hello()
{
    console.log("Hello, Good Morning")
}
RepeatString(5, hello)

RepeatString(7, ()=>{
    console.log("learning JavaScript")
})

// Write a program arrow function to check given no. is prime or not.
var isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

var result = isPrime(17);
console.log("Is 17 prime?", result);
