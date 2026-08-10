var num =11;
var prime =true;

for(var i=2;i<num;i++)
{
    if(num%i==0){
        prime=false;
        break;
    }

}
if(prime){
    console.log("this is prime number:", num);
}
else{
    console.log("this is not a prime number:", num);
}



// Nested Loop

for (var i=1; i<=5; i++)
{
    console.log("Address:i:", i)
    for(var j=1;j<=3;j++){
        console.log("package:j:", j);
    }
    console.log("-----------")
}


// Get list of all prime numbers from 1 to 100

for(var num =1; num<=100; num++){
    var prime =true;
    for(var i=2;i<num;i++){
        if(num%i==0){
            prime =false;
            break;
        }
    }
    if (prime){
        console.log("this is prime number:", num)
    }
}


// prime number from given array

var arr1 =[11,13,67,21,27,101,191]
for(var num of arr1){
    var prime =true;
    for(var i=2;i<num;i++){
        if(num%i==0){
            prime =false;
            break;
        }
    }
    if (prime){
        console.log("this is prime number:", num)
    }
}

