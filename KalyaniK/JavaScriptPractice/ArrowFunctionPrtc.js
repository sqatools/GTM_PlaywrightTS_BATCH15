//check whether given nuber is prime or not -arrow funciton
var result = (num) => {
    var prime = true;
    for (var i=2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
var N=8
var output =result(N);
    if(output){
        console.log(N," is a prime number")

    }else{
        console.log(N," is not a prime number")
    }


   


//sum of all even numbers form 1 to 30
var sumAll=() =>{
    var sum=0;
    for (var i=1;i<=30;i++)
    {
        if(i%2==0)
        {
            sum+=i;
        }
    }
    return sum;
}
var output = sumAll();
console.log("Sum of all even numbers from 1 to 30 is: " + output);
