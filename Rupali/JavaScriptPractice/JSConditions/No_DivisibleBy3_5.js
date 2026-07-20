// number divisible by 3 and 5   using AND operator
var num = 15;

if(num%3==0 && num%5 ==0)
{
    console.log(num, "number is divisible by 3 and 5 both");
}
else{
console.log(num, "number is not divisible by 3 and 5");
}

// number divisible by 3 and 5   using OR operator

var numA =30;

if(numA%3==0 || numA%5 ==0)
{
    console.log(numA, "number is divisible by 3 or 5")
}
else{
    console.log(numA, "number is not divisible by 3 or 5")
}


