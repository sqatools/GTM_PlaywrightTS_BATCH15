function add(a:number,b:number)
{
console.log(a+b)
}

add(12,12)

console.log("...............")

function factorial(a:number){

    var fact=1

    for(var i=2;i<=6;i++)
    {
fact *=i
    }
    console.log(fact)
}
factorial(6)

console.log(".........arrow function.......")

var even = (a:number) => {

    if(a % 2 == 0)
    {
        console.log("even number")
    }
    else{
        console.log("odd number")
    }

}
even(21)